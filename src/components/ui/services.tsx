
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Globe, Target, Users, Mail, Link, ChartBar } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

const ServiceCard = ({ title, description, icon: Icon, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          // Use setAttribute instead of setting style directly
          entry.target.setAttribute("style", "opacity: 1");
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "p-6 rounded-lg hover-lift transition-all duration-300",
        "border border-border bg-white/50 backdrop-blur-sm",
        "opacity-0"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-light/20 to-primary-dark/20 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary-light" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            const headings = sectionRef.current.querySelectorAll('h2, .subtitle');
            headings.forEach((heading, i) => {
              heading.classList.add("animate-slide-up");
              // Use setAttribute instead of directly setting style
              heading.setAttribute("style", "opacity: 1");
              heading.setAttribute("style", `animation-delay: ${0.1 * i}s`);
            });
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "SEO Optimization",
      description: "Improve your website's visibility in search results with our data-driven SEO strategies.",
      icon: Globe
    },
    {
      title: "Paid Advertising",
      description: "Targeted ad campaigns that maximize ROI across Google, social media, and display networks.",
      icon: Target
    },
    {
      title: "Social Media Management",
      description: "Strategic content creation and community engagement to build your brand's social presence.",
      icon: Users
    },
    {
      title: "Email Marketing",
      description: "Personalized email campaigns that nurture leads and drive conversions for your business.",
      icon: Mail
    },
    {
      title: "Content Strategy",
      description: "Compelling content that tells your brand story and establishes thought leadership.",
      icon: Link
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive insights and data visualization to track performance and guide strategy.",
      icon: ChartBar
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-secondary-cornflower/10" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 subtitle">
            Comprehensive digital marketing solutions tailored to elevate your brand's online presence and drive measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
