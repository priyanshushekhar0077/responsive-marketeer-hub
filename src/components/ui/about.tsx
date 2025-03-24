
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in digital marketing, Alex leads our strategic vision."
    },
    {
      name: "Jamie Chen",
      role: "Creative Director",
      bio: "Jamie brings a unique design perspective to every campaign, blending creativity with results."
    },
    {
      name: "Taylor Wilson",
      role: "SEO Specialist",
      bio: "Taylor's data-driven approach ensures our clients stay ahead of algorithm changes."
    },
    {
      name: "Jordan Smith",
      role: "Content Strategist",
      bio: "Jordan crafts compelling narratives that resonate with target audiences."
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          // Use setAttribute instead of setting style directly
          entry.target.setAttribute("style", "opacity: 1");
        }
      },
      { threshold: 0.1 }
    );
    
    const elements = [sectionRef.current, contentRef.current, teamRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding opacity-0" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About NuFormSocial</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We help brands navigate the digital landscape with data-driven strategies and creative excellence.
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 opacity-0"
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              At NuFormSocial, we're committed to transforming how brands connect with their audiences in the digital space. We combine analytical precision with creative innovation to create marketing strategies that not only reach target audiences but resonate with them on a deeper level.
            </p>
            <p className="text-muted-foreground">
              Founded in 2015, we've helped over 200 businesses across diverse industries establish meaningful digital presences and achieve tangible growth through strategic digital marketing.
            </p>
          </div>
          
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-muted-foreground text-lg">Team Image</span>
            </div>
          </div>
        </div>
        
        <div ref={teamRef} className="opacity-0" style={{ transitionDelay: "0.4s" }}>
          <h3 className="text-2xl font-semibold text-center mb-12">Meet Our Team</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={cn(
                  "glassmorphism rounded-xl p-6 text-center hover-lift",
                  "opacity-0 animate-slide-up"
                )}
                style={{ animationDelay: `${0.1 * index + 0.5}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary text-xl font-semibold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
