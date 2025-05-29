
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Camera, TrendingUp, Heart, Target, Calendar, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Good morning, Sarah!</h1>
            <p className="text-gray-600">Let's continue your health journey</p>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="w-5 h-5 text-green-600" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={() => navigate("/meal-analysis")} 
                className="bg-green-600 hover:bg-green-700 h-16 flex flex-col items-center justify-center space-y-1"
              >
                <Camera className="w-6 h-6" />
                <span>Analyze Meal</span>
              </Button>
              <Button 
                onClick={() => navigate("/recommendations")} 
                variant="outline" 
                className="h-16 flex flex-col items-center justify-center space-y-1"
              >
                <Target className="w-6 h-6" />
                <span>View Recommendations</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Today's Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Today's Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Calories</span>
                <span className="text-sm text-gray-600">1,247 / 1,800</span>
              </div>
              <Progress value={69} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Protein</span>
                <span className="text-sm text-gray-600">45g / 120g</span>
              </div>
              <Progress value={38} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Water Intake</span>
                <span className="text-sm text-gray-600">1.2L / 2.5L</span>
              </div>
              <Progress value={48} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Health Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-600" />
              <span>Health Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                <p className="text-sm font-medium text-green-800">Great Choice!</p>
                <p className="text-xs text-green-600">Your lunch was rich in omega-3 fatty acids, perfect for your cardiovascular health goals.</p>
              </div>
              
              <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm font-medium text-yellow-800">Suggestion</p>
                <p className="text-xs text-yellow-600">Consider adding more leafy greens to increase your folate intake for better energy levels.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Meals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              <span>Recent Meals</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🥗</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Mediterranean Salad</p>
                  <p className="text-sm text-gray-600">Lunch • 12:30 PM</p>
                </div>
                <div className="text-sm text-green-600 font-medium">A+</div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🍳</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Avocado Toast</p>
                  <p className="text-sm text-gray-600">Breakfast • 8:00 AM</p>
                </div>
                <div className="text-sm text-orange-600 font-medium">B+</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
