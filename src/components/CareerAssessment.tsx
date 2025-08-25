import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  GraduationCap, 
  Code, 
  Target, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  BookOpen,
  Briefcase,
  Star
} from "lucide-react";

interface AssessmentStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const assessmentSteps: AssessmentStep[] = [
  {
    id: 1,
    title: "Personal Information",
    description: "Tell us about yourself",
    icon: User
  },
  {
    id: 2,
    title: "Education & Background",
    description: "Your academic journey",
    icon: GraduationCap
  },
  {
    id: 3,
    title: "Skills & Experience",
    description: "What you know and do",
    icon: Code
  },
  {
    id: 4,
    title: "Career Goals",
    description: "Where you want to go",
    icon: Target
  }
];

const CareerAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    location: "",
    education: "",
    field: "",
    experience: "",
    skills: [] as string[],
    interests: "",
    goals: "",
    timeline: ""
  });

  const progress = (currentStep / assessmentSteps.length) * 100;

  const handleNext = () => {
    if (currentStep < assessmentSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addSkill = (skill: string) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const popularSkills = [
    "JavaScript", "Python", "React", "Node.js", "Java", "SQL",
    "Data Analysis", "Machine Learning", "UI/UX Design", "Digital Marketing",
    "Project Management", "Communication", "Leadership", "Problem Solving"
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  placeholder="Enter your age"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="City, State"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="education">Highest Education</Label>
              <Input
                id="education"
                value={formData.education}
                onChange={(e) => setFormData(prev => ({ ...prev, education: e.target.value }))}
                placeholder="e.g., B.Tech Computer Science"
              />
            </div>
            <div>
              <Label htmlFor="field">Field of Study</Label>
              <Input
                id="field"
                value={formData.field}
                onChange={(e) => setFormData(prev => ({ ...prev, field: e.target.value }))}
                placeholder="e.g., Computer Science, Business, Engineering"
              />
            </div>
            <div>
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                value={formData.experience}
                onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                placeholder="e.g., Fresher, 1-2 years, 3-5 years"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label>Your Skills</Label>
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    onClick={() => removeSkill(skill)}
                  >
                    {skill} ×
                  </Badge>
                ))}
              </div>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Popular Skills (click to add):</p>
                <div className="flex flex-wrap gap-2">
                  {popularSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => addSkill(skill)}
                    >
                      {skill} +
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="interests">Areas of Interest</Label>
              <Textarea
                id="interests"
                value={formData.interests}
                onChange={(e) => setFormData(prev => ({ ...prev, interests: e.target.value }))}
                placeholder="Describe what interests you professionally..."
                rows={4}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="goals">Career Goals</Label>
              <Textarea
                id="goals"
                value={formData.goals}
                onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                placeholder="What are your career aspirations? What type of roles interest you?"
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="timeline">Timeline</Label>
              <Input
                id="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                placeholder="e.g., 6 months, 1 year, 2-3 years"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="assessment" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Career Assessment
          </h2>
          <p className="text-xl text-muted-foreground">
            Help us understand your background to provide personalized recommendations
          </p>
        </div>

        <Card className="shadow-career-lg">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {assessmentSteps.map((step) => {
                  const IconComponent = step.icon;
                  return (
                    <div
                      key={step.id}
                      className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        step.id === currentStep
                          ? 'bg-primary text-primary-foreground'
                          : step.id < currentStep
                          ? 'bg-success text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {step.id < currentStep ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <IconComponent className="w-5 h-5" />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="text-sm text-muted-foreground">
                Step {currentStep} of {assessmentSteps.length}
              </div>
            </div>
            <Progress value={progress} className="mb-4" />
            <CardTitle className="text-2xl">
              {assessmentSteps[currentStep - 1]?.title}
            </CardTitle>
            <CardDescription>
              {assessmentSteps[currentStep - 1]?.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderStepContent()}
            
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              {currentStep < assessmentSteps.length ? (
                <Button onClick={handleNext}>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button className="bg-gradient-primary">
                  Get My Results
                  <Star className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CareerAssessment;