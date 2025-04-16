# streamlit_api.py
# This file should be placed in a backend server folder

import os
import subprocess
import json
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Path to the streamlit app
STREAMLIT_APP_PATH = os.path.join(os.path.dirname(__file__), "..", "python", "script", "app.py")

# Store information about running processes
running_processes = {}

@app.route('/api/streamlit/status', methods=['GET'])
def check_status():
    """Check if the Streamlit dashboard is running"""
    process_id = request.args.get('id', 'hvac_dashboard')
    
    if process_id in running_processes:
        process = running_processes[process_id]
        # Check if process is still running
        if process['process'].poll() is None:
            return jsonify({
                'running': True,
                'url': process['url'],
                'pid': process['process'].pid
            })
    
    return jsonify({'running': False})

@app.route('/api/streamlit/start', methods=['POST'])
def start_streamlit():
    """Start the Streamlit dashboard"""
    data = request.json or {}
    process_id = data.get('id', 'hvac_dashboard')
    mode = data.get('mode', 'dashboard')  # 'dashboard' or 'headless'
    
    # Check if already running
    if process_id in running_processes:
        process = running_processes[process_id]
        if process['process'].poll() is None:
            return jsonify({
                'success': True,
                'message': 'Streamlit dashboard already running',
                'url': process['url'],
                'pid': process['process'].pid
            })
    
    try:
        # Command to run the Streamlit app
        cmd = ["python", STREAMLIT_APP_PATH]
        
        if mode == 'dashboard':
            cmd.append("--dashboard")
        elif mode == 'headless':
            cmd.append("--headless")
        
        # Start the process
        process = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        
        # Store in our dictionary
        streamlit_url = "http://localhost:8501"  # Default Streamlit URL
        running_processes[process_id] = {
            'process': process,
            'url': streamlit_url,
            'mode': mode
        }
        
        return jsonify({
            'success': True,
            'message': 'Streamlit dashboard started successfully',
            'url': streamlit_url,
            'pid': process.pid
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f"Failed to start Streamlit dashboard: {str(e)}"
        }), 500

@app.route('/api/streamlit/stop', methods=['POST'])
def stop_streamlit():
    """Stop the Streamlit dashboard"""
    data = request.json or {}
    process_id = data.get('id', 'hvac_dashboard')
    
    if process_id in running_processes:
        process = running_processes[process_id]
        try:
            # Check if the process is still running
            if process['process'].poll() is None:
                # Terminate the process
                process['process'].terminate()
                process['process'].wait(timeout=5)
                
            # Remove from our dictionary
            del running_processes[process_id]
            
            return jsonify({
                'success': True,
                'message': 'Streamlit dashboard stopped successfully'
            })
        
        except Exception as e:
            return jsonify({
                'success': False,
                'message': f"Failed to stop Streamlit dashboard: {str(e)}"
            }), 500
    
    return jsonify({
        'success': False,
        'message': 'No running Streamlit dashboard found'
    }), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)