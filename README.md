
# NeuraWatt: AI-Powered Energy Efficiency Platform

## 🌍 Project Overview

NeuraWatt is an advanced, AI-driven energy management platform designed to optimize building energy consumption, reduce carbon footprint, and enhance sustainability through intelligent technologies and data-driven insights.

https://neurawatt.netlify.app/

## 🚀 Key Features

### 1. Intelligent HVAC Optimization
- Real-time occupancy detection
- AI-powered temperature and fan speed control
- Adaptive scheduling based on building usage patterns
- Energy vs. comfort balance optimization

### 2. Occupancy Simulator
- Predictive modeling of building usage
- Granular zone-level occupancy analysis
- Customizable simulation parameters
- Visualization of occupancy trends

### 3. Waste Predictor
- Identify high-risk energy waste areas
- Analyze waste by zone, time, and system type
- AI-generated optimization recommendations
- Detailed waste pattern visualization

### 4. Building Design & Digital Twin
- Interactive building layout designer
- Zone-based room type mapping
- Export and import of building configurations
- Simulation-ready building models

### 5. Advanced Analytics & Reporting
- Comprehensive energy consumption charts
- Cost savings forecasting
- Sustainability performance tracking
- Exportable PDF reports

### 6. Gamified Sustainability Leaderboard
- Building and department performance rankings
- Achievement badges
- Comparative efficiency metrics

## 🛠 Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS
- Shadcn/UI Component Library
- React Router
- Recharts (Data Visualization)
- React Query

### Backend & AI
- Python
- Streamlit
- PyTorch
- YOLOv5 (Occupancy Detection)
- Transformers (AI Modeling)
- OpenWeatherMap API Integration

### Infrastructure
- Flask (API Server)
- Vite
- Docker (Containerization)

## 🤖 AI & Machine Learning Techniques

- Computer Vision for Occupancy Detection
- Predictive Modeling
- Rule-Based and Machine Learning HVAC Optimization
- Time Series Analysis
- Digital Twin Simulation

## 📦 Project Structure

```
neurawatt/
├── backend/
│   ├── streamlit_api.py
│   └── services/
├── python/
│   ├── script/
│   │   ├── app.py
│   │   ├── detection.py
│   │   ├── optimizer.py
│   │   └── sensing.py
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.tsx
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- pip
- Conda (optional, recommended)

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/MonishRaman/NeuraWatt-AI-Energy-Optimization-Suite-for-Smart-Buildings.git

# Navigate to project directory
cd neurawatt

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

# Install Python dependencies
pip install -r requirements.txt

# Start Flask API
python backend/streamlit_api.py

# Start Streamlit dashboard
streamlit run python/script/app.py
```

## 🌐 Deployment

- Frontend: Vercel, Netlify
- Backend: AWS, Google Cloud, Heroku
- Docker containerization available

## 🔒 Security Features
- User authentication
- Role-based access control
- Two-factor authentication
- Secure API endpoints

## 📊 Performance Metrics

- Energy Cost Reduction: 15-30%
- CO₂ Emissions Reduction: Up to 40%
- Implementation Time: 2-4 weeks
- No Additional Hardware Required

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Your Name - monishr608@gmail.com

Project Link: [https://github.com/MonishRaman/NeuraWatt-AI-Energy-Optimization-Suite-for-Smart-Buildings.git](https://github.com/MonishRaman/NeuraWatt-AI-Energy-Optimization-Suite-for-Smart-Buildings.git)

---

🌿 **NeuraWatt: Powering a Sustainable Future, One Building at a Time**