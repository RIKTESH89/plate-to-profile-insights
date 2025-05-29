
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, Zap, AlertTriangle, CheckCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const MealAnalysis = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleCameraCapture = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const resetAnalysis = () => {
    setAnalysisComplete(false);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Meal Analysis</h1>
            <p className="text-gray-600">Capture your meal for instant insights</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <X className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {!analysisComplete && !isAnalyzing && (
          <div className="space-y-6">
            {/* Camera Section */}
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Capture Your Meal</h3>
                <p className="text-gray-600 mb-6">
                  Take a photo of your meal for instant nutritional analysis and personalized recommendations
                </p>
                <div className="space-y-3">
                  <Button 
                    onClick={handleCameraCapture}
                    className="w-full bg-green-600 hover:bg-green-700 py-4 text-lg"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Take Photo
                  </Button>
                  <Button variant="outline" className="w-full py-4 text-lg">
                    <Upload className="w-5 h-5 mr-2" />
                    Upload from Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Photography Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm">Ensure good lighting for better analysis</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm">Include the entire plate in the frame</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm">Take the photo from directly above</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {isAnalyzing && (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Zap className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Analyzing Your Meal...</h3>
              <p className="text-gray-600 mb-6">
                Our AI is identifying ingredients and calculating nutritional values
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{width: "60%"}}></div>
              </div>
            </CardContent>
          </Card>
        )}

        {analysisComplete && (
          <div className="space-y-6">
            {/* Results Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🥗</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Mediterranean Quinoa Bowl</h3>
                    <p className="text-gray-600">Detected: Quinoa, Chickpeas, Feta, Olives, Tomatoes</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">A-</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Nutritional Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Nutritional Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">485</div>
                    <div className="text-sm text-gray-600">Calories</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">18g</div>
                    <div className="text-sm text-gray-600">Protein</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">52g</div>
                    <div className="text-sm text-gray-600">Carbs</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">22g</div>
                    <div className="text-sm text-gray-600">Fat</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">Excellent Choice!</p>
                      <p className="text-sm text-green-600">This meal aligns perfectly with your Mediterranean diet goals and provides healthy omega-3 fats.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-800">Consider Adding</p>
                      <p className="text-sm text-yellow-600">More leafy greens would boost your folate intake for better energy levels.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button onClick={resetAnalysis} variant="outline" className="py-4">
                Analyze Another
              </Button>
              <Button onClick={() => navigate("/recommendations")} className="bg-green-600 hover:bg-green-700 py-4">
                View Full Report
              </Button>
            </div>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default MealAnalysis;
