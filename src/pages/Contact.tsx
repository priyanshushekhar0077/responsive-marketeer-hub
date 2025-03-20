
import { MainLayout } from "@/layouts/main-layout";
import { ContactForm } from "@/components/ui/contact-form";
import { Helmet } from "react-helmet";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useEffect, useRef } from "react";

const ContactPage = () => {
  const infoRef = useRef<HTMLDivElement>(null);
  
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
    
    if (infoRef.current) {
      observer.observe(infoRef.current);
    }
    
    return () => {
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["123 Marketing Street", "Digital City, DC 45678", "United States"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@nuformsocial.com", "support@nuformsocial.com"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (123) 456-7890", "+1 (987) 654-3210"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday-Friday: 9AM-6PM", "Weekend: Closed"]
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Contact Us | NuFormSocial</title>
        <meta name="description" content="Get in touch with NuFormSocial for all your digital marketing needs. We're here to help transform your online presence." />
        <meta name="keywords" content="contact NuFormSocial, digital marketing agency contact, marketing consultation" />
      </Helmet>
      
      <div className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions about our services or ready to get started? Reach out to our team today for a free consultation.
          </p>
        </div>
      </div>
      
      <div className="py-20">
        <div className="container mx-auto">
          <div 
            ref={infoRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 opacity-0"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="glassmorphism rounded-xl p-8 text-center hover-lift"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-muted-foreground text-lg">Map Location</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Ready to transform your digital presence? Fill out the form below, and one of our marketing specialists will get back to you within 24 hours to discuss how we can help your business grow.
              </p>
              
              <div className="glassmorphism rounded-xl p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none bg-white/50"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Schedule a free 30-minute consultation with our marketing experts to discuss your goals and how we can help.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
