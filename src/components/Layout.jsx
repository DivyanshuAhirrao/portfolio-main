import { useEffect, lazy,  memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";

const Projects = lazy(() => import("./projects/Projects"));
const Contact = lazy(() => import("./contact/Contact"));
const Footer = lazy(() => import("./footer/Footer"));
const EnhancedScrollEffects = lazy(
  () => import("./animation/EnhancedScrollAnimation"),
);
const HorizontalScrollSection = lazy(
  () => import("./sections/HorizontalScrollSection"),
);
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));

const Layout = memo(() => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  return (
      <EnhancedScrollEffects>
        <section className="overflow-x-hidden bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="pt-[11vh]">
            <Home />
            <Projects />
            <HorizontalScrollSection />
            <ExperienceSection />
            <Contact />
            <Footer />
          </main>
        </section>
      </EnhancedScrollEffects>
  );
}, []);

Layout.displayName = "Layout";

export default Layout;
