import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, University } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-medical-teal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Project Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">DermDetect</h3>
            <p className="text-white/80 leading-relaxed">
              AI-powered skin lesion classification system developed as part of 
              APS360 Applied Fundamentals of Deep Learning course.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-white/30 text-white">
                Deep Learning
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                Computer Vision
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                Healthcare AI
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Project Overview
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  Live Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="#" className="hover:text-white transition-colors">
                  Source Code
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                <a href="#" className="hover:text-white transition-colors">
                  Research Paper
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                <a href="#" className="hover:text-white transition-colors">
                  Dataset
                </a>
              </li>
              <li className="flex items-center gap-2">
                <University className="w-4 h-4" />
                <a href="#" className="hover:text-white transition-colors">
                  Course Info
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Interested in our work or have questions about the project? 
              We'd love to hear from you!
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="w-4 h-4" />
              <span className="text-sm">dermdetect.team@university.edu</span>
            </div>
            <div className="text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <University className="w-4 h-4" />
                <span>University of Toronto</span>
              </div>
              <div className="ml-6 text-white/60">
                Computer Engineering Program
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 DermDetect Team. Developed for educational purposes as part of APS360.
            </div>
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <span>Built with React & TensorFlow</span>
              <span>•</span>
              <span>Deployed on AWS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;