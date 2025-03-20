
import { MainLayout } from "@/layouts/main-layout";
import { About } from "@/components/ui/about";
import { ContactForm } from "@/components/ui/contact-form";
import { Helmet } from "react-helmet";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.style.opacity = "1";
        }
      },
      { threshold: 0.1 }
    );
    
    const elements = [heroRef.current, missionRef.current, valuesRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of trends and algorithms to deliver cutting-edge strategies."
    },
    {
      title: "Transparency",
      description: "We believe in clear communication and measurable results you can trust."
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do."
    },
    {
      title: "Partnership",
      description: "We view ourselves as an extension of your team, fully invested in your success."
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      description: "NuFormSocial was founded with a mission to transform digital marketing."
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Doubled our team size and expanded service offerings to include paid advertising."
    },
    {
      year: "2019",
      title: "Recognition",
      description: "Recognized as a top 10 digital marketing agency in our region."
    },
    {
      year: "2021",
      title: "Innovation",
      description: "Launched our proprietary analytics platform for enhanced reporting."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded to serve clients across three continents with specialized regional strategies."
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>About Us | NuFormSocial</title>
        <meta name="description" content="Learn about NuFormSocial's mission, values, and the team behind our innovative digital marketing solutions." />
        <meta name="keywords" content="NuFormSocial, digital marketing agency, marketing team, agency values, marketing mission" />
      </Helmet>
      
      <div 
        ref={heroRef} 
        className="pt-32 pb-20 bg-secondary/30 opacity-0"
      >
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground">
            NuFormSocial is a team of digital marketing experts passionate about helping brands succeed in the digital landscape. Learn more about our journey, mission, and the people who make it happen.
          </p>
        </div>
      </div>
      
      <div 
        ref={missionRef}
        className="py-20 opacity-0" 
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, NuFormSocial began with a simple yet ambitious mission: to transform how brands connect with their audiences in the digital space. We recognized that many businesses were struggling to navigate the rapidly evolving digital landscape, and we set out to bridge that gap.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founders, with backgrounds spanning marketing, data science, and creative design, believed that exceptional digital marketing requires both analytical precision and creative innovation. This philosophy remains at the core of everything we do.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to have helped over 200 businesses across diverse industries establish meaningful digital presences and achieve tangible growth through strategic digital marketing.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-primary/5 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary/10 rounded-full"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <span className="text-muted-foreground text-lg">Company Image</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-center mb-12">Our Journey</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "relative z-10 flex items-center",
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    )}
                  >
                    {/* Year Bubble */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={cn(
                      "w-1/2",
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                    )}>
                      <div className={cn(
                        "glassmorphism p-6 rounded-lg inline-block",
                        index % 2 === 0 ? "ml-auto" : "mr-auto"
                      )}>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Empty Space */}
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        ref={valuesRef}
        className="py-20 bg-secondary/30 opacity-0"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="glassmorphism rounded-xl p-8 text-center hover-lift"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <About />
      <ContactForm />
    </MainLayout>
  );
};

export default AboutPage;
