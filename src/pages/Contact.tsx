
import { MainLayout } from "@/layouts/main-layout";
import { ContactForm } from "@/components/ui/contact-form";
import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
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
    <MainLayout>
      <Helmet>
        <title>Contact Us | NuFormSocial</title>
        <meta name="description" content="Get in touch with our digital marketing experts to discuss how we can help transform your online presence and drive business results." />
        <meta name="keywords" content="contact, digital marketing agency, marketing consultation, SEO services" />
      </Helmet>
      
      <div className="pt-32 pb-20 bg-gradient-to-r from-primary-light/10 to-primary-dark/10">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Ready to transform your digital marketing strategy? Our team is here to help. Reach out today for a free consultation.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div 
              ref={sectionRef} 
              className="opacity-0 col-span-1 lg:col-span-1 flex flex-col space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Have questions or ready to start your project? Contact us through any of these channels.
                </p>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary-light mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:info@nuformsocial.com" className="text-muted-foreground hover:text-primary-light transition-colors">
                    info@nuformsocial.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary-light mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary-light transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-light mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Office</h4>
                  <address className="text-muted-foreground not-italic">
                    123 Marketing St<br />
                    Digital City, 45678<br />
                    United States
                  </address>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Business Hours</h4>
                <p className="text-muted-foreground">Monday - Friday: 9am - 6pm EST</p>
                <p className="text-muted-foreground">Weekends: Closed</p>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ContactPage;
