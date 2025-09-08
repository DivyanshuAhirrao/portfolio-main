import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out-cubic',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <div className="pt-[11vh]"> {/* Added padding for fixed navbar */}
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
