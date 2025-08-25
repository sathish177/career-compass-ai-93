import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Brain, 
  Shield, 
  BarChart3, 
  Palette, 
  Megaphone,
  TrendingUp,
  ArrowRight,
  Star,
  Clock,
  DollarSign
} from "lucide-react";

interface CareerPath {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  skills: string[];
  salaryRange: string;
  growth: string;
  timeToStart: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  trending: boolean;
}

const careerPaths: CareerPath[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Build applications, websites, and software solutions using programming languages and frameworks",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    skills: ["JavaScript", "React", "Python", "Node.js", "Git", "APIs"],
    salaryRange: "₹4-15 LPA",
    growth: "Excellent",
    timeToStart: "6-12 months",
    difficulty: "Intermediate",
    trending: true
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex data to help organizations make informed business decisions using AI/ML",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    skills: ["Python", "Machine Learning", "SQL", "Statistics", "Pandas", "TensorFlow"],
    salaryRange: "₹6-20 LPA",
    growth: "Excellent",
    timeToStart: "8-15 months",
    difficulty: "Advanced",
    trending: true
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Specialist",
    description: "Protect organizations from cyber threats and ensure digital security infrastructure",
    icon: Shield,
    gradient: "from-red-500 to-orange-500",
    skills: ["Networking", "Ethical Hacking", "Risk Assessment", "Compliance", "Linux", "CISSP"],
    salaryRange: "₹5-18 LPA",
    growth: "High",
    timeToStart: "6-10 months",
    difficulty: "Advanced",
    trending: true
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    description: "Bridge technology and business by analyzing requirements and improving processes",
    icon: BarChart3,
    gradient: "from-green-500 to-emerald-500",
    skills: ["Excel", "SQL", "Data Analysis", "Process Mapping", "Communication", "Agile"],
    salaryRange: "₹3-12 LPA",
    growth: "Good",
    timeToStart: "3-6 months",
    difficulty: "Beginner",
    trending: false
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description: "Create intuitive and beautiful user experiences for digital products and services",
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems", "HTML/CSS"],
    salaryRange: "₹3-10 LPA",
    growth: "Good",
    timeToStart: "4-8 months",
    difficulty: "Intermediate",
    trending: false
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Specialist",
    description: "Promote brands and products through digital channels and data-driven campaigns",
    icon: Megaphone,
    gradient: "from-yellow-500 to-orange-500",
    skills: ["Google Analytics", "SEO/SEM", "Social Media", "Content Strategy", "PPC", "Email Marketing"],
    salaryRange: "₹2-8 LPA",
    growth: "Good",
    timeToStart: "2-4 months",
    difficulty: "Beginner",
    trending: false
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-success text-white";
    case "Intermediate": return "bg-warning text-white";
    case "Advanced": return "bg-destructive text-white";
    default: return "bg-muted text-muted-foreground";
  }
};

const CareerPaths = () => {
  return (
    <section id="careers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Career Opportunities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Career Paths
            <span className="block text-primary">Tailored for You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover high-growth career opportunities in India's tech industry. 
            Each path includes skills, timeline, and earning potential.
          </p>
        </div>

        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {careerPaths.map((career) => {
            const IconComponent = career.icon;
            return (
              <Card 
                key={career.id}
                className="group hover:shadow-career-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-career-sm bg-gradient-card relative overflow-hidden"
              >
                {career.trending && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-primary text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${career.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {career.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {career.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {career.skills.slice(0, 4).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {career.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{career.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center text-sm">
                      <DollarSign className="w-4 h-4 text-success mr-2" />
                      <div>
                        <p className="text-xs text-muted-foreground">Salary</p>
                        <p className="font-semibold text-foreground">{career.salaryRange}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-info mr-2" />
                      <div>
                        <p className="text-xs text-muted-foreground">Timeline</p>
                        <p className="font-semibold text-foreground">{career.timeToStart}</p>
                      </div>
                    </div>
                  </div>

                  {/* Difficulty & Growth */}
                  <div className="flex justify-between items-center pt-2">
                    <Badge className={getDifficultyColor(career.difficulty)}>
                      {career.difficulty}
                    </Badge>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Growth: </span>
                      <span className="font-semibold text-foreground">{career.growth}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full mt-4 group-hover:bg-gradient-primary transition-all duration-300"
                    variant="outline"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-primary px-8 py-4 text-lg">
            Take Assessment to Find Your Path
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Get personalized recommendations based on your skills and interests
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;