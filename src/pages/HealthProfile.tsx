
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { User, Heart, Target, FileText, ChevronRight, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HealthProfile = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);

  const healthConditions = [
    "Diabetes Type 2", "Hypertension", "High Cholesterol", "Heart Disease",
    "Celiac Disease", "IBS", "GERD", "Thyroid Disorder", "Kidney Disease"
  ];

  const commonAllergies = [
    "Nuts", "Shellfish", "Dairy", "Gluten", "Eggs", "Soy", "Fish", "Sesame"
  ];

  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev => 
      prev.includes(condition) 
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const toggleAllergy = (allergy: string) => {
    setSelectedAllergies(prev => 
      prev.includes(allergy) 
        ? prev.filter(a => a !== allergy)
        : [...prev, allergy]
    );
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Health Profile</h1>
            <p className="text-gray-600">Step {currentStep} of 4</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300" 
              style={{width: `${(currentStep / 4) * 100}%`}}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Step 1: Basic Info */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-green-600" />
                <span>Basic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="30" />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input id="height" type="number" placeholder="165" />
                </div>
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input id="weight" type="number" placeholder="65" />
                </div>
              </div>

              <div>
                <Label htmlFor="activity">Activity Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                    <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                    <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                    <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                    <SelectItem value="very-active">Very Active (2x/day)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Health Conditions */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-600" />
                <span>Health Conditions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                Select any health conditions that apply to you. This helps us provide personalized dietary recommendations.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {healthConditions.map((condition) => (
                  <div 
                    key={condition}
                    onClick={() => toggleCondition(condition)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedConditions.includes(condition)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{condition}</span>
                      <Checkbox 
                        checked={selectedConditions.includes(condition)}
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Label htmlFor="other-conditions">Other Conditions</Label>
                <Textarea 
                  id="other-conditions" 
                  placeholder="Please list any other health conditions or medications..."
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Goals & Preferences */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span>Goals & Dietary Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="goal">Primary Health Goal</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your main goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weight-loss">Weight Loss</SelectItem>
                    <SelectItem value="weight-gain">Weight Gain</SelectItem>
                    <SelectItem value="maintain">Maintain Current Weight</SelectItem>
                    <SelectItem value="muscle-gain">Build Muscle</SelectItem>
                    <SelectItem value="health">Improve General Health</SelectItem>
                    <SelectItem value="energy">Increase Energy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="diet">Dietary Preference</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your diet type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="balanced">Balanced Diet</SelectItem>
                    <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="keto">Ketogenic</SelectItem>
                    <SelectItem value="paleo">Paleo</SelectItem>
                    <SelectItem value="low-carb">Low Carb</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Food Allergies & Intolerances</Label>
                <div className="grid grid-cols-2 gap-3">
                  {commonAllergies.map((allergy) => (
                    <div 
                      key={allergy}
                      onClick={() => toggleAllergy(allergy)}
                      className={`p-3 border-2 rounded-lg cursor-pointer transition-all text-center ${
                        selectedAllergies.includes(allergy)
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-medium">{allergy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Medical Reports */}
        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-purple-600" />
                <span>Medical Reports (Optional)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                Upload recent medical reports for more accurate recommendations. All data is encrypted and secure.
              </p>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Upload Medical Reports</h3>
                <p className="text-gray-600 mb-4">
                  Blood tests, cholesterol panels, diabetes reports, etc.
                </p>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Choose Files
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-medium">Blood Panel - March 2024</p>
                    <p className="text-sm text-gray-600">2.3 MB • PDF</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Why medical reports help:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• More precise nutritional recommendations</li>
                  <li>• Better monitoring of health markers</li>
                  <li>• Personalized meal suggestions based on your lab values</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button variant="outline" onClick={prevStep}>
              Previous
            </Button>
          )}
          
          <Button 
            onClick={nextStep}
            className="bg-green-600 hover:bg-green-700 ml-auto"
          >
            {currentStep === 4 ? 'Complete Setup' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HealthProfile;
