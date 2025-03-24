
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/logo.png" alt="NuForm Social" className="h-8" />
            </Link>
            <p className="text-muted-foreground mb-6">
              Digitalize your future with innovative marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-tertiary hover:text-primary-light transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-tertiary hover:text-primary-light transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-tertiary hover:text-primary-light transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-tertiary hover:text-primary-light transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary-light transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-light transition-colors">Paid Advertising</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-light transition-colors">Social Media</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-light transition-colors">Email Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-light transition-colors">Content Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary-light transition-colors">Case Studies</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary-light transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary-light transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary-light flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Marketing St, Digital City, 45678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-light flex-shrink-0" />
                <a href="mailto:info@nuformsocial.com" className="text-muted-foreground hover:text-primary-light transition-colors">
                  info@nuformsocial.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-light flex-shrink-0" />
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary-light transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} NuFormSocial. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex justify-center sm:justify-end space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
