import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Target, 
  TrendingUp, 
  FileText, 
  Users, 
  Award,
  ArrowRight,
  Lightbulb,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Career Assessment",
    description: "Get personalized insights based on your skills, interests, and market trends",
    gradient: "from-purple-500 to-pink-500",
    benefits: ["Skill Gap Analysis", "Personality Matching", "Market Alignment"]
  },
  {
    icon: Target,
    title: "Personalized Career Roadmaps",
    description: "Step-by-step guidance tailored to your background and aspirations",
    gradient: "from-blue-500 to-cyan-500",
    benefits: ["90-Day Plans", "Milestone Tracking", "Resource Recommendations"]
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Real-time insights on job trends, salary ranges, and skill demands",
    gradient: "from-green-500 to-emerald-500",
    benefits: ["Salary Insights", "Trending Skills", "Industry Growth"]
  },
  {
    icon: FileText,
    title: "Resume Optimization",
    description: "AI-powered resume analysis and improvement suggestions",
    gradient: "from-orange-500 to-red-500",
    benefits: ["ATS Optimization", "Impact Metrics", "Industry Standards"]
  },
  {
    icon: Users,
    title: "Interview Preparation",
    description: "Practice with AI-generated questions specific to your target roles",
    gradient: "from-indigo-500 to-purple-500",
    benefits: ["Mock Interviews", "STAR Framework", "Feedback Analysis"]
  },
  {
    icon: Award,
    title: "Skill Development",
    description: "Curated learning paths from top platforms and institutions",
    gradient: "from-teal-500 to-blue-500",
    benefits: ["Free Resources", "Certification Paths", "Time Estimates"]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Lightbulb className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="block text-primary">Succeed in Your Career</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From assessment to achievement - our comprehensive platform provides 
            personalized guidance at every step of your career journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-career-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-career-sm bg-gradient-card"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <BarChart3 className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of students and professionals who've found their perfect career path
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg px-8 py-4 text-lg font-semibold"
            >
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;