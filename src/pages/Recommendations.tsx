
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Target, 
  Calendar, 
  Clock, 
  ChefHat, 
  Heart, 
  Zap,
  AlertTriangle,
  CheckCircle,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const Recommendations = () => {
  const navigate = useNavigate();

  const mealSuggestions = [
    {
      name: "Quinoa Buddha Bowl",
      calories: 420,
      time: "25 min",
      rating: "A+",
      ingredients: ["Quinoa", "Chickpeas", "Avocado", "Spinach"],
      benefits: "High in protein and fiber, perfect for your diabetes management"
    },
    {
      name: "Grilled Salmon Salad",
      calories: 380,
      time: "15 min",
      rating: "A",
      ingredients: ["Salmon", "Mixed Greens", "Walnuts", "Olive Oil"],
      benefits: "Rich in omega-3 fatty acids for heart health"
    },
    {
      name: "Mediterranean Wrap",
      calories: 350,
      time: "10 min",
      rating: "B+",
      ingredients: ["Whole Wheat Tortilla", "Hummus", "Vegetables"],
      benefits: "Balanced macronutrients with complex carbohydrates"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Recommendations</h1>
            <p className="text-gray-600">Personalized insights for your health</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <X className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          {/* Today's Recommendations */}
          <TabsContent value="today" className="space-y-6">
            {/* Daily Goals Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-green-600" />
                  <span>Today's Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Calories</span>
                    <span className="text-sm text-gray-600">1,247 / 1,800</span>
                  </div>
                  <Progress value={69} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">On track for weight loss goal</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Blood Sugar Impact</span>
                    <span className="text-sm text-green-600">Low</span>
                  </div>
                  <Progress value={25} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">Excellent for diabetes management</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Sodium Intake</span>
                    <span className="text-sm text-yellow-600">1,200mg / 1,500mg</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">Watch sodium for blood pressure</p>
                </div>
              </CardContent>
            </Card>

            {/* Priority Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <span>Priority Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">Great Progress!</p>
                      <p className="text-sm text-green-600">Your meal choices today are well-aligned with your diabetes management goals.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-800">Hydration Reminder</p>
                      <p className="text-sm text-yellow-600">You're 40% below your daily water goal. Consider having a glass of water now.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start space-x-2">
                    <Heart className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">Heart Health Tip</p>
                      <p className="text-sm text-blue-600">Add more omega-3 rich foods like walnuts or salmon to support cardiovascular health.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Meal Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ChefHat className="w-5 h-5 text-purple-600" />
                  <span>Recommended Meals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mealSuggestions.map((meal, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{meal.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center">
                            <Zap className="w-4 h-4 mr-1" />
                            {meal.calories} cal
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {meal.time}
                          </span>
                        </div>
                      </div>
                      <Badge className={`${
                        meal.rating === 'A+' ? 'bg-green-100 text-green-800' :
                        meal.rating === 'A' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {meal.rating}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{meal.benefits}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {meal.ingredients.map((ingredient, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      View Recipe
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Weekly Overview */}
          <TabsContent value="weekly" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Weekly Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-gray-600">Goal Achievement</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">6.2</div>
                    <div className="text-sm text-gray-600">Avg. Meal Rating</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Nutritional Balance</span>
                      <span className="text-sm text-gray-600">Good</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Blood Sugar Control</span>
                      <span className="text-sm text-gray-600">Excellent</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Meal Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center py-8">
                  Personalized weekly meal plan coming soon based on your preferences and health goals.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Health Insights */}
          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-600" />
                  <span>Health Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Blood Sugar Trends</h4>
                  <p className="text-sm text-blue-800 mb-3">
                    Your meal choices have helped maintain stable blood glucose levels this week, 
                    with 89% of meals having low glycemic impact.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">Trending Positive</Badge>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Cardiovascular Health</h4>
                  <p className="text-sm text-green-800 mb-3">
                    Excellent progress on heart-healthy choices. Your omega-3 intake increased 
                    by 40% compared to last month.
                  </p>
                  <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Areas for Improvement</h4>
                  <p className="text-sm text-yellow-800 mb-3">
                    Consider increasing fiber intake through more vegetables and whole grains 
                    to support digestive health.
                  </p>
                  <Badge className="bg-yellow-100 text-yellow-800">Needs Attention</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Recommendations;
