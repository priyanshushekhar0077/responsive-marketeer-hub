import { MainLayout } from "@/layouts/main-layout";
import { Services } from "@/components/ui/services";
import { ContactForm } from "@/components/ui/contact-form";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ChartBar, Target, Globe, Users, Mail, Link } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const ServiceDetail = ({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  reversed = false 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  icon: React.ElementType; 
  reversed?: boolean;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          // Fix the style property issue
          entry.target.setAttribute("style", "opacity: 1");
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

  return (
    <div 
      ref={sectionRef}
      className="opacity-0 py-20 border-b border-border"
    >
      <div className={cn(
        "container mx-auto",
        "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      )}>
        <div className={cn(reversed && "lg:order-2")}>
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mb-6">
            {description}
          </p>
          <ul className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="rounded-full px-6">Learn More</Button>
        </div>
        
        <div className={cn(
          "relative aspect-video rounded-lg overflow-hidden shadow-xl",
          reversed && "lg:order-1"
        )}>
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-muted-foreground text-lg">{title} Preview</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Increase your website's visibility and drive organic traffic with our comprehensive SEO services. We use data-driven strategies to improve your search engine rankings and connect you with your target audience.",
      features: [
        "In-depth keyword research and strategy",
        "On-page and technical SEO optimization",
        "Link building and authority development",
        "Local SEO for business visibility",
        "Regular performance reporting"
      ],
      icon: Globe
    },
    {
      title: "Paid Advertising",
      description: "Maximize your ROI with targeted paid advertising campaigns across multiple platforms. We create and manage ads that reach your ideal customers and drive conversions.",
      features: [
        "Strategic campaign planning and setup",
        "Audience targeting and segmentation",
        "Ad creative development",
        "Budget optimization and bid management",
        "Conversion tracking and analytics"
      ],
      icon: Target,
      reversed: true
    },
    {
      title: "Social Media Management",
      description: "Build a strong social media presence that engages your audience and strengthens your brand. Our team creates compelling content and manages community interactions to grow your following.",
      features: [
        "Platform-specific content strategy",
        "Consistent posting schedule",
        "Community management and engagement",
        "Influencer partnership coordination",
        "Performance analytics and reporting"
      ],
      icon: Users
    },
    {
      title: "Content Strategy",
      description: "Develop a content marketing strategy that establishes your brand as an industry leader. Our content experts create valuable, SEO-optimized content that resonates with your audience.",
      features: [
        "Content audit and gap analysis",
        "Editorial calendar development",
        "Blog posts, articles, and guides",
        "Lead magnets and downloadable resources",
        "Content distribution strategy"
      ],
      icon: Link,
      reversed: true
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and drive conversions with personalized email campaigns. We design, implement, and optimize email marketing strategies that deliver results.",
      features: [
        "List building and segmentation",
        "Email automation workflows",
        "A/B testing and optimization",
        "Personalized content creation",
        "Performance tracking and analysis"
      ],
      icon: Mail
    },
    {
      title: "Analytics & Reporting",
      description: "Gain valuable insights into your marketing performance with comprehensive analytics and reporting. We track key metrics and provide actionable recommendations for continuous improvement.",
      features: [
        "Custom dashboard setup",
        "Goal tracking and conversion analysis",
        "Campaign attribution modeling",
        "Regular performance reviews",
        "Strategic recommendations"
      ],
      icon: ChartBar,
      reversed: true
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Our Services | NuFormSocial</title>
        <meta name="description" content="Explore our comprehensive digital marketing services including SEO, paid advertising, social media management, content strategy, and more." />
        <meta name="keywords" content="digital marketing services, SEO services, social media marketing, content strategy, paid advertising" />
      </Helmet>
      
      <div className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            We offer comprehensive digital marketing solutions designed to elevate your brand, engage your audience, and drive measurable results. Explore our services below.
          </p>
        </div>
      </div>
      
      {services.map((service, index) => (
        <ServiceDetail
          key={index}
          title={service.title}
          description={service.description}
          features={service.features}
          icon={service.icon}
          reversed={service.reversed}
        />
      ))}
      
      <ContactForm />
    </MainLayout>
  );
};

export default ServicesPage;
