
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  index: number;
}

const Testimonial = ({ quote, author, position, company, index }: TestimonialProps) => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          // Use setAttribute instead of directly setting style
          entry.target.setAttribute("style", "opacity: 1");
        }
      },
      { threshold: 0.1 }
    );
    
    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }
    
    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);
  
  return (
    <div
      ref={testimonialRef}
      className="opacity-0 flex flex-col p-8 rounded-xl glassmorphism transition-all duration-300 hover:shadow-lg"
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      <div className="mb-6">
        <svg className="h-8 w-8 text-primary/60" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-lg mb-6">{quote}</p>
      <div className="mt-auto">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">
          {position}, {company}
        </p>
      </div>
    </div>
  );
};

export function Testimonials() {
  const testimonials = [
    {
      quote: "NuFormSocial transformed our digital marketing strategy. Their data-driven approach increased our organic traffic by 150% in just 6 months.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp"
    },
    {
      quote: "The team at NuFormSocial understands how to create content that resonates with our audience. Our engagement rates have never been higher.",
      author: "Michael Chen",
      position: "CEO",
      company: "Innovate Solutions"
    },
    {
      quote: "Working with NuFormSocial was a game-changer for our brand. Their SEO expertise helped us outrank competitors for key industry terms.",
      author: "Emily Rodriguez",
      position: "Digital Strategist",
      company: "Growth Partners"
    }
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          // Fix: Use setAttribute instead of directly setting style
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
    <section className="section-padding" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped transform.
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className="opacity-0 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
