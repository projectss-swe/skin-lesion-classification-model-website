import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Tala Abdelmaguid",
      role: "Machine Learning Engineer",
      specialization: "Computer Vision & Neural Networks",
      description: "Led the development of EfficientNet-B2 architecture and model optimization strategies.",
      skills: ["PyTorch", "Computer Vision", "EfficientNet"],
      email: "tala.abdelmaguid@mail.utoronto.ca",
      studentId: "1010083142",
      linkedin: "https://www.linkedin.com/in/tala-abdelmaguid-1250ba204/"
    },
    {
      name: "Huda Halani", 
      role: "Machine Learning Engineer",
      specialization: "Medical Data Analysis",
      description: "Collaborated with Tala on the development of the EfficientNet-B2 model and optimization strategies.",
      skills: ["Data Analysis", "Statistical Modeling", "Medical Imaging"],
      email: "huda.halani@mail.utoronto.ca",
      studentId: "1010174543",
      linkedin: "https://www.linkedin.com/in/hudahalani/"
    },
    {
      name: "Ruqia Fatima",
      role: "Machine Learning Engineer", 
      specialization: "AI in Healthcare",
      description: "Developed and implemented the baseline SVM model using ResNet-18 features for comparison.",
      skills: ["Research Design", "Healthcare AI", "Technical Writing"],
      email: "ruqia.fatima@mail.utoronto.ca",
      studentId: "1010190749",
      linkedin: "https://www.linkedin.com/in/ruqia-fatima-139850215/"
    },
    {
      name: "Noor Khalil",
      role: "Machine Learning Engineer",
      specialization: "ML Infrastructure & Deployment",
      description: "Handled ISIC 2019 dataset preprocessing, augmentation, and statistical validation.",
      skills: ["MLOps", "Cloud Deployment", "API Development"],
      email: "noorw.khalil@mail.utoronto.ca",
      studentId: "1008016601",
      linkedin: "https://www.linkedin.com/in/noor-khalil-372883196/"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four passionate machine learning engineers driven by the urgent need to make early skin cancer detection accessible to everyone.
          </p>
        </div>



        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-medical-light/20 border-medical-light/50">
              <CardHeader className="text-center pb-4">
                {member.image ? (
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                <Badge variant="outline" className="mb-2">{member.role}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <div 
                    className="w-8 h-8 bg-medical-light rounded-full flex items-center justify-center hover:bg-medical-blue hover:text-white transition-colors cursor-pointer"
                    onClick={() => window.open(member.linkedin, '_blank')}
                  >
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div 
                    className="w-8 h-8 bg-medical-light rounded-full flex items-center justify-center hover:bg-medical-teal hover:text-white transition-colors cursor-pointer"
                    onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                  >
                    <Mail className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-medical-blue/10 to-medical-teal/10 border-medical-light/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🌟 Our Vision for the Future
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This project is just the beginning. We envision a future where AI-powered skin cancer detection is accessible to everyone, 
                from rural clinics to mobile health apps. Our goal is to develop deployable AI tools that can assist healthcare professionals 
                and empower individuals to take control of their health through early detection.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200 mb-6">
                <p className="text-green-800 font-medium">
                  💚 "Every early detection could mean a life saved. That's what drives us to push the boundaries of what's possible with AI in healthcare."
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2">University of Toronto</Badge>
                <Badge variant="outline" className="px-4 py-2">APS360 - Applied Fundamentals of Deep Learning</Badge>
                <Badge variant="outline" className="px-4 py-2">Computer Engineering</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;