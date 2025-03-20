
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto stagger-animation">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary animate-blur-in">
              Digital Marketing Solutions
            </span>
          </div>
          
          <h1 ref={heroRef} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 text-balance animate-blur-in">
            Transform Your Brand's <span className="text-primary">Digital Presence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 text-balance animate-blur-in">
            We combine data-driven strategies with creative excellence to deliver marketing solutions that elevate your brand and drive measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-blur-in">
            <Button className="rounded-full px-8 py-6 text-base" size="lg">
              Get Started
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 w-full max-w-4xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: "0.8s" }}>
            <div className={cn(
              "w-full aspect-video bg-white/50 rounded-lg shadow-xl overflow-hidden",
              "hover-lift border border-gray-200",
              "flex items-center justify-center"
            )}>
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-muted-foreground text-lg">Dashboard Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-slow">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
