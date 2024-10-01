import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonials';

export default function Index() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <Features />
      <Products />
      <Contact />
      <Testimonial />
      <Footer />
    </>
  );
}
