import { useEffect } from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import AOS from "aos";
import pro from "../media/profile-pic.png";
import Info from "./Info";
import SocialLinks from "./SocialLinks";
import hi from "../media/hi.json";
import "aos/dist/aos.css";
import TextRevealAnimation from "../animation/TextRevealAnimation";
import MagneticHover from "../animation/MagneticHover";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hi,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      id="home"
      className="py-2 flex flex-wrap bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen relative overflow-hidden"
    >
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10"
        data-parallax="0.3" // NEW: Parallax effect
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-10"
        data-parallax="0.7" 
        animate={{
          scale: [1.5, 1, 1.5],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 transform -translate-x-1/2 -translate-y-1/2"
        data-morph="true"
      ></div>
      <aside className="xs:w-[100%] sm:min-w-[600px] md:w-[50%] pt-20 h-[100%] flex justify-center items-center relative z-10">
        <TextRevealAnimation direction="left" delay={0.2}>
          <MagneticHover strength={0.2}>
            <motion.img
              src={pro}
              alt="img"
              className="blinker xs:hidden sm:block rounded-[50%] h-[25vw] border-2 border-gray-700 dark:border-gray-400 shadow-2xl"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </MagneticHover>
        </TextRevealAnimation>
        
        <div className="xs:block sm:hidden w-[100%] relative bottom-20 xs:h-[32vw]">
          <TextRevealAnimation direction="up" delay={0.1}>
            <aside className="w-[60%]">
              <MagneticHover>
                <img
                  src={pro}
                  alt="imgs"
                  className="scale-75 rounded-[50%] shadow-md shadow-gray-500 dark:shadow-gray-700"
                />
              </MagneticHover>
            </aside>
          </TextRevealAnimation>
          <motion.aside 
            className="w-[40%] absolute top-5 right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Lottie options={defaultOptions} width={170} />
          </motion.aside>
        </div>
      </aside>

      <aside className="xs:w-[100%] sm:min-w-[600px] md:w-[50%] h-[100%] text-center relative z-10">
        <div className="pt-12 flex flex-col gap-2">
          <TextRevealAnimation direction="right" delay={0.3}>
            <Info />
          </TextRevealAnimation>
          <TextRevealAnimation direction="up" delay={0.5}>
            <SocialLinks />
          </TextRevealAnimation>
        </div>
      </aside>
    </div>
  );
};

export default Home;
