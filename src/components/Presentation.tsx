import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const Presentation = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🎥 Project Presentation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our comprehensive presentation showcasing the development process, 
            technical implementation, and results of our skin lesion classification project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-medical-light/20 border-medical-light/50 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl md:text-3xl flex items-center justify-center gap-3">
                <Play className="h-8 w-8 text-medical-blue" />
                APS360 Final Project Presentation
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                University of Toronto - Applied Fundamentals of Deep Learning
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-medical-blue/20 to-medical-teal/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer"
                         onClick={() => window.open('https://drive.google.com/file/d/1llML8i-xkh-0PYoDc_KhfrWZlBhGFS00/view?usp=sharing', '_blank')}>
                      <Play className="h-10 w-10 ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Watch Our Presentation</h3>
                    <p className="text-white/80 mb-4">Click to view the full project presentation</p>
                    <Button 
                      variant="outline" 
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                      onClick={() => window.open('https://drive.google.com/file/d/1llML8i-xkh-0PYoDc_KhfrWZlBhGFS00/view?usp=sharing', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Presentation
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <h4 className="font-semibold mb-2">Technical Deep Dive</h4>
                  <p className="text-sm text-muted-foreground">Model architecture, training process, and optimization techniques</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">📈</span>
                  </div>
                  <h4 className="font-semibold mb-2">Results & Analysis</h4>
                  <p className="text-sm text-muted-foreground">Performance metrics, validation results, and comparative analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <h4 className="font-semibold mb-2">Future Vision</h4>
                  <p className="text-sm text-muted-foreground">Real-world applications and deployment possibilities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
