import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={import.meta.env.BASE_URL + "images/logo_color.png"}
                alt="SKOPIA Biosystems Logo" 
                className="h-12 w-auto"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("solution")}
                className="text-skopia-dark hover:text-skopia-green transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Platform
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-skopia-dark hover:text-skopia-green transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-skopia-dark hover:text-skopia-green transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Benefits
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-skopia-green hover:bg-skopia-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Get Demo
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <button
                    onClick={() => scrollToSection("solution")}
                    className="text-left text-lg font-medium text-skopia-dark hover:text-skopia-green transition-colors"
                  >
                    Platform
                  </button>
                  <button
                    onClick={() => scrollToSection("technology")}
                    className="text-left text-lg font-medium text-skopia-dark hover:text-skopia-green transition-colors"
                  >
                    Technology
                  </button>
                  <button
                    onClick={() => scrollToSection("benefits")}
                    className="text-left text-lg font-medium text-skopia-dark hover:text-skopia-green transition-colors"
                  >
                    Benefits
                  </button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-skopia-green hover:bg-skopia-dark text-white w-full mt-4"
                  >
                    Get Demo
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
