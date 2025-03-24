
import { MainLayout } from "@/layouts/main-layout";
import { About } from "@/components/ui/about";
import { ContactForm } from "@/components/ui/contact-form";
import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const AboutPage = () => {
  const historyRef = useRef<HTMLDivElement>(null);
  
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
    
    if (historyRef.current) {
      observer.observe(historyRef.current);
    }
    
    return () => {
      if (historyRef.current) {
        observer.unobserve(historyRef.current);
      }
    };
  }, []);

  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description: "NuFormSocial was established with a vision to transform digital marketing through innovative, data-driven strategies."
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Expanded our team and service offerings to include comprehensive social media management and content creation."
    },
    {
      year: "2019",
      title: "Innovation",
      description: "Developed proprietary analytics tools to provide clients with deeper insights into their marketing performance."
    },
    {
      year: "2021",
      title: "Growth",
      description: "Opened new offices and expanded our client base to serve businesses across multiple industries nationwide."
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Received industry recognition for our innovative approach to digital marketing and client success stories."
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>About Us | NuFormSocial</title>
        <meta name="description" content="Learn about NuFormSocial's mission, team, and approach to digital marketing. Discover how we help brands navigate the digital landscape." />
        <meta name="keywords" content="digital marketing agency, marketing team, brand strategy, company history" />
      </Helmet>
      
      <div className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground">
            We're a team of digital marketing experts passionate about helping brands achieve exceptional results in the digital space.
          </p>
        </div>
      </div>
      
      <About />
      
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From our founding to where we are today, we've been dedicated to innovation and excellence in digital marketing.
            </p>
          </div>
          
          <div 
            ref={historyRef}
            className="opacity-0 max-w-4xl mx-auto"
          >
            <div className="relative border-l-2 border-primary/20 pl-8 ml-4 space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "relative",
                    "opacity-0 animate-slide-up"
                  )}
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border-2 border-white">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="absolute -left-24 font-semibold text-primary">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm />
    </MainLayout>
  );
};

export default AboutPage;
