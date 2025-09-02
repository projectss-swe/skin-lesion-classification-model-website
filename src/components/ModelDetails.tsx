import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Cpu, Database, Settings, Layers } from "lucide-react";

const ModelDetails = () => {
  const architectures = [
    {
      name: "LinearSVC (Baseline)",
      accuracy: 60.6,
      params: "ResNet-18 Features",
      description: "Support Vector Machine with ResNet-18 feature extraction baseline"
    },
    {
      name: "EfficientNet-B2",
      accuracy: 81.1,
      params: "7.8M", 
      description: "Compound scaling CNN optimized for efficiency and performance"
    },
    {
      name: "ResNet-50",
      accuracy: 92.1,
      params: "25.6M",
      description: "Deep residual network with skip connections for robust feature learning"
    }
  ];

  const datasetStats = [
    { category: "Total Images", value: "33,569", description: "ISIC 2019 dermatoscopic images" },
    { category: "Training Set", value: "25,331", description: "ISIC 2019 training images" },
    { category: "Validation Set", value: "3,750+", description: "15% for hyperparameter tuning" },
    { category: "Test Set", value: "8,238", description: "ISIC 2019 test images" }
  ];

  const classes = [
    { name: "MEL (Melanoma)", count: 1113, color: "bg-red-500" },
    { name: "NV (Melanocytic Nevus)", count: 6705, color: "bg-blue-500" },
    { name: "BCC (Basal Cell Carcinoma)", count: 514, color: "bg-green-500" },
    { name: "AK (Actinic Keratosis)", count: 327, color: "bg-yellow-500" },
    { name: "BKL (Benign Keratosis)", count: 1099, color: "bg-purple-500" },
    { name: "DF (Dermatofibroma)", count: 115, color: "bg-pink-500" },
    { name: "VASC (Vascular Lesion)", count: 142, color: "bg-indigo-500" },
    { name: "SCC (Squamous Cell Carcinoma)", count: 376, color: "bg-orange-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-medical-light/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🏗️ Model Architecture & Technical Details
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dive into our technical implementation, model architecture choices, 
            and the comprehensive dataset used for training and validation.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-semibold">
                🧠 <strong>EfficientNet-B2</strong> with 7.8M parameters for optimal efficiency
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="dataset">Dataset</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture" className="space-y-8">
            <Card className="bg-gradient-to-br from-card to-medical-light/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Layers className="h-6 w-6 text-medical-blue" />
                  Model Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {architectures.map((arch, index) => (
                    <Card key={index} className="border-medical-light/50">
                      <CardHeader>
                        <CardTitle className="text-lg">{arch.name}</CardTitle>
                        <Badge variant={arch.accuracy === 81.1 ? "default" : "secondary"} className="w-fit">
                          {arch.accuracy === 81.1 ? "Best Model" : "Baseline"}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Accuracy</span>
                            <span className="font-bold text-medical-blue">{arch.accuracy}%</span>
                          </div>
                          <Progress value={arch.accuracy} className="h-2" />
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Parameters</span>
                          <span className="font-medium">{arch.params}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{arch.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dataset" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-card to-medical-light/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Database className="h-6 w-6 text-medical-teal" />
                    Dataset Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {datasetStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-medical-light/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">{stat.category}</h4>
                        <p className="text-sm text-muted-foreground">{stat.description}</p>
                      </div>
                      <div className="text-2xl font-bold text-medical-blue">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card to-medical-light/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Class Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {classes.map((cls, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{cls.name}</span>
                        <span className="text-medical-blue font-bold">{cls.count}</span>
                      </div>
                      <Progress value={(cls.count / 10015) * 100} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-8">
            <Card className="bg-gradient-to-br from-card to-medical-light/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Settings className="h-6 w-6 text-medical-blue" />
                  Training Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg">Hyperparameters</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Learning Rate</span>
                        <span className="font-medium">0.001</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Batch Size</span>
                        <span className="font-medium">32</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Epochs</span>
                        <span className="font-medium">100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Optimizer</span>
                        <span className="font-medium">Adam</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg">Data Augmentation</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Random rotation (±30°)</li>
                      <li>• Horizontal/vertical flips</li>
                      <li>• Color jittering</li>
                      <li>• Random cropping</li>
                      <li>• Gaussian noise</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg">Regularization</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Dropout (0.5)</li>
                      <li>• L2 weight decay</li>
                      <li>• Early stopping</li>
                      <li>• Learning rate scheduling</li>
                      <li>• Cross-validation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-8">
            <Card className="bg-gradient-to-br from-card to-medical-light/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Cpu className="h-6 w-6 text-medical-teal" />
                  Deployment & Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-3">Model Optimization</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-medical-teal rounded-full mt-2 flex-shrink-0"></div>
                          <span>TensorRT optimization for inference acceleration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-medical-teal rounded-full mt-2 flex-shrink-0"></div>
                          <span>Model pruning to reduce parameter count by 30%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-medical-teal rounded-full mt-2 flex-shrink-0"></div>
                          <span>INT8 quantization for edge deployment</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-3">Performance Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-medical-light/30 rounded">
                          <span className="text-muted-foreground">Inference Time</span>
                          <span className="font-bold text-medical-blue">45ms</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-medical-light/30 rounded">
                          <span className="text-muted-foreground">Memory Usage</span>
                          <span className="font-bold text-medical-blue">2.1GB</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-medical-light/30 rounded">
                          <span className="text-muted-foreground">Throughput</span>
                          <span className="font-bold text-medical-blue">22 imgs/sec</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-3">Infrastructure</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-medical-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span>Docker containerization for reproducible deployment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-medical-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span>REST API with FastAPI framework</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-medical-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span>Load balancing for high availability</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-medical-blue/10 to-medical-teal/10 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Clinical Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        Designed with HIPAA compliance considerations and integration 
                        capabilities for existing hospital information systems.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ModelDetails;