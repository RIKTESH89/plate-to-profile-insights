
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Brain, Zap, ArrowRight, Shield, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Clinically Validated</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Personal
            <span className="text-green-600 block">Nutrition Coach</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get personalized dietary recommendations based on your meal photos and health data. 
            Transform your eating habits with AI-powered insights from nutritionists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={() => navigate("/health-profile")} 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => navigate("/dashboard")} 
              variant="outline" 
              size="lg" 
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              View Demo
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Meal Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply photograph your meals and get instant nutritional analysis with personalized recommendations
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect your medical reports and health conditions for truly personalized dietary guidance
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced algorithms analyze your patterns and provide actionable recommendations for better health
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white/60 backdrop-blur rounded-2xl p-8 mb-16 border border-green-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9★</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How NutriWise Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Setup Your Profile</h3>
              <p className="text-gray-600">Input your health data, dietary preferences, and medical conditions for personalized recommendations</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Capture Your Meals</h3>
              <p className="text-gray-600">Take photos of your meals and let our AI analyze nutritional content and ingredients</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Recommendations</h3>
              <p className="text-gray-600">Receive personalized dietary advice and meal suggestions based on your health goals</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Health?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of users who have improved their nutrition with NutriWise</p>
          <Button 
            onClick={() => navigate("/health-profile")} 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
