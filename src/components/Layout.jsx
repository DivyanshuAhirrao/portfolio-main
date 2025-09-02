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
    AOS.init();
  }, []);

  return (
    <section className="overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
};

export default Layout;
