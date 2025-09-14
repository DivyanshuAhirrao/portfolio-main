import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import { useEffect, lazy, Suspense, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = lazy(() => import("./projects/Projects"));
const Contact = lazy(() => import("./contact/Contact"));
const Footer = lazy(() => import("./footer/Footer"));
const EnhancedScrollEffects = lazy(() => import("./animation/EnhancedScrollAnimation"));
const HorizontalScrollSection = lazy(() => import("./sections/HorizontalScrollSection"));
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
    <Suspense fallback={<div className="text-center py-10">Loading…</div>}>
      <EnhancedScrollEffects>
        <section className="overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar />
          <div className="pt-[11vh]">
            <Home />
            <Projects />
            <HorizontalScrollSection />
            <ExperienceSection />
            <Contact />
            <Footer />
          </div>
        </section>
      </EnhancedScrollEffects>
    </Suspense>
  );
},[]);

Layout.displayName = "Layout";

export default Layout;
