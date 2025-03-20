
import { Hero } from "@/components/ui/hero";
import { Services } from "@/components/ui/services";
import { Testimonials } from "@/components/ui/testimonials";
import { About } from "@/components/ui/about";
import { ContactForm } from "@/components/ui/contact-form";
import { MainLayout } from "@/layouts/main-layout";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>NuFormSocial | Digital Marketing Excellence</title>
        <meta name="description" content="NuFormSocial delivers innovative digital marketing solutions that transform your brand's online presence and drive measurable results." />
        <meta name="keywords" content="digital marketing, SEO, social media marketing, content strategy, paid advertising" />
      </Helmet>
      
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <ContactForm />
    </MainLayout>
  );
};

export default Index;
