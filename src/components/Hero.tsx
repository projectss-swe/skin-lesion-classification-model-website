import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-medical-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-medical-blue/80 to-medical-teal/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DermDetect
            <span className="block text-2xl md:text-3xl font-light mt-2 opacity-90">
              AI-Powered Skin Cancer Detection
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95 space-y-4">
            <p className="text-center text-white">
              <strong>Did you know there are over 1 million new skin cancer cases every year?</strong>
            </p>

            <p className="text-center text-lg md:text-xl text-white">
              That urgency inspired our team to explore: <span className="font-semibold">Can AI really help detect skin cancer from just one photo?</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://drive.google.com/file/d/1llML8i-xkh-0PYoDc_KhfrWZlBhGFS00/view?usp=sharing', '_blank')}
            >
              View Live Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-hero" 
              size="lg"
              onClick={() => window.open('https://github.com/projectss-swe/skin-lesion-classification-model', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View Code
            </Button>
            <Button 
              variant="outline-hero" 
              size="lg"
              onClick={() => window.open('https://drive.google.com/file/d/1wP9UG8CTjti6BQJ5eH6UvbbDcrdlMeK6/view?usp=sharing', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Read Paper
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 group hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">81.1%</div>
              <div className="text-lg opacity-90">Model Accuracy</div>
              <div className="text-sm opacity-75 mt-2">+20% over baseline</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 group hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">8 Classes</div>
              <div className="text-lg opacity-90">Lesion Types</div>
              <div className="text-sm opacity-75 mt-2">Cancerous & Benign</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 group hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">25,331</div>
              <div className="text-lg opacity-90">Training Images</div>
              <div className="text-sm opacity-75 mt-2">ISIC 2019 Dataset</div>
            </div>
          </div>
          
          {/* Additional Visual Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <div className="text-lg font-bold">95%+</div>
              <div className="text-sm opacity-80">Survival Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <div className="text-lg font-bold">1 Photo</div>
              <div className="text-sm opacity-80">Detection</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <div className="text-lg font-bold">Real-time</div>
              <div className="text-sm opacity-80">Analysis</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <div className="text-lg font-bold">Global</div>
              <div className="text-sm opacity-80">Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;