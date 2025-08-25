import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Compass, User, LogIn } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#assessment", label: "Assessment" },
    { href: "#careers", label: "Career Paths" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-career-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Career Compass</h1>
              <p className="text-xs text-muted-foreground">AI-Powered Guidance</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
            <Button size="sm" className="bg-gradient-primary">
              <LogIn className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">Career Compass</h2>
                    <p className="text-xs text-muted-foreground">AI-Powered Guidance</p>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-foreground hover:text-primary transition-colors font-medium p-2 rounded-lg hover:bg-muted"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="flex flex-col space-y-3 pt-6 border-t border-border">
                  <Button variant="ghost" className="justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                  <Button className="bg-gradient-primary justify-start">
                    <LogIn className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;