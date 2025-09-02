import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity, Brain, Target, Zap } from "lucide-react";

const ProjectOverview = () => {
  const features = [
    {
      icon: Brain,
      title: "Our Approach",
      description: "Started with baseline SVM using ResNet-18 features, advanced to fine-tuned EfficientNet-B2 with aggressive augmentation and class-weighted loss"
    },
    {
      icon: Activity,
      title: "8-Class Detection",
      description: "Differentiates between cancerous (melanoma, SCC, BCC, AK) and non-cancerous (NV, BKL, DF, VASC) conditions from just one photo"
    },
    {
      icon: Target,
      title: "Proven Results",
      description: "81% test accuracy with 0.82 macro F1-score (+20% over baseline) across diverse skin tones, lighting, and lesion types"
    },
    {
      icon: Zap,
      title: "Future Vision",
      description: "Deployable AI tools for healthcare: clinical decision support, mobile apps, and telemedicine for accessible early detection"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Project Overview
          </h2>
          <div className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
              <p className="text-lg font-medium text-purple-800 mb-2">🚀 Our Mission:</p>
              <p className="text-purple-700">
                To develop deployable AI tools for healthcare, from clinical decision support systems to mobile apps and telemedicine, 
                making early skin cancer detection accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-medical-light/50 bg-gradient-to-br from-card to-medical-light/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{feature.description}</p>
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-1 bg-gradient-to-r from-medical-blue to-medical-teal rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Visual Process Flow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Development Process</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold mb-2">Data Collection</h4>
              <p className="text-sm text-muted-foreground">ISIC 2019 Dataset<br/>25,331+ Images</p>
            </div>
            <div className="hidden md:block text-2xl text-muted-foreground">→</div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="font-semibold mb-2">Model Training</h4>
              <p className="text-sm text-muted-foreground">EfficientNet-B2<br/>Transfer Learning</p>
            </div>
            <div className="hidden md:block text-2xl text-2xl text-muted-foreground">→</div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">Validation</h4>
              <p className="text-sm text-muted-foreground">81.1% Accuracy<br/>8-Class Detection</p>
            </div>
            <div className="hidden md:block text-2xl text-muted-foreground">→</div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold mb-2">Deployment</h4>
              <p className="text-sm text-muted-foreground">Real-world<br/>Applications</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-medical-blue/10 to-medical-teal/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">The Challenge</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Skin cancer is one of the most common forms of cancer, with early detection being 
                crucial for successful treatment. Traditional diagnosis relies heavily on expert 
                dermatologists, creating bottlenecks in healthcare access.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our solution leverages deep learning to provide accurate, fast, and accessible 
                preliminary screening, empowering both patients and healthcare providers.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border border-pink-200 shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚠️</div>
                  <h4 className="text-2xl font-bold text-pink-800 mb-4">Critical Statistics</h4>
                  <div className="space-y-3">
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-3xl font-bold text-pink-600">1M+</div>
                      <div className="text-sm text-pink-700">New cases annually</div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-3xl font-bold text-pink-600">95%+</div>
                      <div className="text-sm text-pink-700">Survival with early detection</div>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg">
                      <div className="text-3xl font-bold text-pink-600">Limited</div>
                      <div className="text-sm text-pink-700">Access to specialists</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;