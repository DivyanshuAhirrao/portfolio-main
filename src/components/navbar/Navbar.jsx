import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import { Button } from "flowbite-react";
import NavAvatar from "./NavAvatar";
import TemporaryDrawer from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/7972814411`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.nav 
      className={`${
        scrolled 
          ? 'bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-gray-800 dark:bg-gray-900'
      } text-gray-200 dark:text-gray-100 flex justify-around items-center h-[11vh] w-[100%] transition-all duration-300 fixed top-0 z-40`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <aside className="xs:w-[75%] xs:relative xs:right-12 sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[30%] flex justify-start xs:pl-16 sm:pl-[60px] md:pl-[70px] lg:pl-[80px] xl:pl-[80px]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <NavAvatar />
          <h1 className="text-[16px] opacity-90 uppercase pt-3 pl-3 text-white dark:text-gray-100 font-mono font-semibold">
            Divyanshu Ahirrao
          </h1>
        </motion.div>
      </aside>
      
      <aside className="xs:w-[25%] xs:hidden sm:block sm:w-[80%] flex">
        <Menu />
      </aside>
      
      <aside className="w-[20%] flex justify-end pr-2 gap-3 items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ThemeToggle />
        </motion.div>
        
        <motion.button 
          onClick={handleClick} 
          className="xs:hidden sm:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button outline gradientDuoTone="tealToLime">
            Chat Now
          </Button>
        </motion.button>
        
        <div className="xs:block sm:hidden scale-125">
          <TemporaryDrawer />
        </div>
      </aside>
    </motion.nav>
  );
};

export default Navbar;
