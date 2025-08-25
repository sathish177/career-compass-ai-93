import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Career success and growth" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Navigate Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              Career Journey
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get personalized career guidance, skill assessments, and actionable roadmaps 
            tailored for Indian students and professionals
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="bg-white text-career-blue hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-career-lg px-8 py-4 text-lg font-semibold"
            >
              Start Career Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-career-blue transition-all duration-300 px-8 py-4 text-lg"
            >
              Explore Career Paths
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">10,000+</h3>
              <p className="text-gray-300">Students Guided</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-gray-300">Career Paths</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">95%</h3>
              <p className="text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce"></div>
    </section>
  );
};

export default HeroSection;