import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Camera, Zap, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

const LiveDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleDemoClick = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const sampleResults = [
    { condition: "Melanocytic Nevus", confidence: 87.3, risk: "Low" },
    { condition: "Melanoma", confidence: 8.2, risk: "High" },
    { condition: "Basal Cell Carcinoma", confidence: 3.1, risk: "Medium" },
    { condition: "Benign Keratosis", confidence: 1.4, risk: "Low" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Live Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our AI-powered skin lesion classification system in action. 
            Upload an image and get instant analysis results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-medical-light/20 border-medical-light/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">DermDetect AI Analysis</CardTitle>
              <div className="flex justify-center gap-4 mb-6">
                <Badge variant="outline" className="px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  Real-time Analysis
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  94.2% Accuracy
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-medical-light rounded-xl p-12 text-center hover:border-medical-blue/50 transition-colors">
                {!isAnalyzing && !showResults ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center">
                      <Upload className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Upload Skin Lesion Image
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Drag and drop your dermatoscopic image or click to browse
                      </p>
                      <Button onClick={handleDemoClick} size="lg" className="mr-4">
                        Try Sample Image
                      </Button>
                      <Button variant="outline" size="lg">
                        <Camera className="w-4 h-4 mr-2" />
                        Choose File
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Supported formats: JPG, PNG, JPEG • Max size: 10MB
                    </p>
                  </div>
                ) : isAnalyzing ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center animate-pulse">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Analyzing Image...
                      </h3>
                      <p className="text-muted-foreground">
                        Our AI model is processing your image using deep learning algorithms
                      </p>
                    </div>
                    <div className="w-full bg-medical-light/50 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-medical-blue to-medical-teal h-full rounded-full animate-pulse"></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Analysis Complete
                    </h3>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setShowResults(false);
                        setIsAnalyzing(false);
                      }}
                    >
                      Analyze Another Image
                    </Button>
                  </div>
                )}
              </div>

              {/* Results */}
              {showResults && (
                <div className="space-y-6 animate-in fade-in-50 duration-500">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Classification Results
                    </h3>
                    <p className="text-muted-foreground">
                      AI confidence scores for different skin lesion types
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {sampleResults.map((result, index) => (
                      <Card key={index} className={`border-2 ${index === 0 ? 'border-medical-blue bg-medical-light/20' : 'border-medical-light/50'}`}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                result.risk === 'High' ? 'bg-red-100 text-red-600' :
                                result.risk === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                                'bg-green-100 text-green-600'
                              }`}>
                                {result.risk === 'High' ? <AlertCircle className="w-6 h-6" /> : <CheckCircle className="w-6 h-6" />}
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground">{result.condition}</h4>
                                <Badge variant="outline" className={`text-xs ${
                                  result.risk === 'High' ? 'border-red-200 text-red-600' :
                                  result.risk === 'Medium' ? 'border-yellow-200 text-yellow-600' :
                                  'border-green-200 text-green-600'
                                }`}>
                                  {result.risk} Risk
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-medical-blue">
                                {result.confidence}%
                              </div>
                              <div className="text-sm text-muted-foreground">Confidence</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-2">Medical Disclaimer</h4>
                          <p className="text-sm text-yellow-700">
                            This AI analysis is for educational and research purposes only. 
                            Always consult with qualified healthcare professionals for medical diagnosis and treatment decisions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Technical Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center bg-gradient-to-br from-card to-medical-light/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Fast Processing</h4>
                <p className="text-sm text-muted-foreground">
                  Results in under 45ms using optimized inference pipeline
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-card to-medical-light/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">High Accuracy</h4>
                <p className="text-sm text-muted-foreground">
                  94.2% accuracy validated on clinical test dataset
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-card to-medical-light/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Easy Upload</h4>
                <p className="text-sm text-muted-foreground">
                  Simple drag-and-drop interface for seamless user experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;