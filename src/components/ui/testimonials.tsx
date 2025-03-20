
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "NuFormSocial transformed our digital strategy. Our online engagement has increased by 200% and leads have doubled since we started working with them.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova Inc."
    },
    {
      id: 2,
      quote: "The team at NuFormSocial understands our brand voice perfectly. Their content strategy has helped us establish thought leadership in our industry.",
      author: "Michael Chen",
      position: "CEO",
      company: "Horizon Solutions"
    },
    {
      id: 3,
      quote: "We've tried other agencies before, but NuFormSocial's data-driven approach and transparent reporting make all the difference. Results speak for themselves.",
      author: "Jessica Rivera",
      position: "Growth Manager",
      company: "EcoSmart Products"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
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
    <section ref={sectionRef} className="section-padding bg-white opacity-0" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We take pride in delivering exceptional results for businesses across industries.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="min-w-full px-4"
                  >
                    <div className="glassmorphism rounded-2xl p-8 md:p-10">
                      <div className="mb-6">
                        <svg className="h-8 w-8 text-primary opacity-80" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-balance">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <span className="text-primary font-semibold">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-primary scale-100" : "bg-primary/20 scale-75"
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
