
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would actually authenticate
    // For now, we'll just simulate a successful login/registration
    
    setTimeout(() => {
      // Demo credentials for testing
      if (isLogin && email === "demo@neurawatt.com" && password === "password") {
        toast({
          title: "Login successful",
          description: "Welcome back to NeuraWatt!",
        });
        navigate("/dashboard");
      } else if (isLogin) {
        // For demo purposes, accept any credentials in login
        toast({
          title: "Login successful",
          description: "Welcome to NeuraWatt!",
        });
        navigate("/dashboard");
      } else {
        // Registration always succeeds in demo
        toast({
          title: "Registration successful",
          description: "Your account has been created!",
        });
        setIsLogin(true);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen neurawatt-gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-neurawatt-purple mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-gray-600">
              {isLogin 
                ? "Sign in to access your NeuraWatt dashboard" 
                : "Join NeuraWatt to optimize your building's energy efficiency"}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="email@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-neurawatt-purple hover:underline">
                  Forgot password?
                </a>
              </div>
            )}
            
            <Button type="submit" className="w-full bg-neurawatt-purple hover:bg-neurawatt-purple-dark">
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button"
                className="text-neurawatt-purple hover:underline font-medium"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              Demo credentials: demo@neurawatt.com / password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
