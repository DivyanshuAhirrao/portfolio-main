import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { HORIZONTAL_DATA } from "../utils/constants";
import card_backend from "../media/card-backend.json";
import card_uiux from "../media/card-uiux.json";
import card_mobile from "../media/card-mobile_dev.json";
import card_database from "../media/card-database.json";
import card_devops from "../media/card_devops.json";
import card_webdev from "../media/card_webdev.json";
import Lottie from "react-lottie";

const ANIMATIONS_FILE_MAP = [
  card_webdev,
  card_mobile,
  card_uiux,
  card_backend,
  card_database,
  card_devops,
];

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const [itemWidth, setItemWidth] = useState(700);
  

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
     if (window.innerWidth <= 678) {
      setItemWidth(948);
     }

    if (section && scrollContainer) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      const totalScroll =
        scrollContainer.scrollWidth - window.innerWidth;
        
      gsap.to(scrollContainer, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Card depth animations
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, scale: 0.8, rotateY: i % 2 === 0 ? -15 : 15 },
            {
              opacity: 1,
              scale: 1,
              rotateY: 0,
              scrollTrigger: {
                trigger: card,
                containerAnimation: ScrollTrigger.getById("horizontal"),
                start: "left center",
                end: "right center",
                scrub: 1
              }
            }
          );
        }
      });

      // Background parallax for particles container
      gsap.to(".particle", {
        xPercent: -20,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden relative"
      id="horizontal-section"
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="flex items-center h-screen">
        <div
          ref={scrollContainerRef}
          className="flex gap-12 px-16"
          style={{ width: `${HORIZONTAL_DATA.length * itemWidth}px` }}
        >
          <div className="flex-shrink-0 w-96 flex items-center justify-center">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Areas of Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-md">
                Our Offerings, Service Portfolio, Solutions, Capabilities...
              </p>

            </motion.div>
          </div>

          {HORIZONTAL_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex-shrink-0 w-80 h-96 p-6 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10 flex flex-col justify-between will-change-transform"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`
              }}
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                z: 50
              }}
            >
              <div>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <Lottie options={{
                  autoplay: true,
                  animationData: ANIMATIONS_FILE_MAP[index],
                  rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                  loop: true,
                  },
                }}
                width={170}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 md:left-[45%] sm:left-[43%] xs:left-[41%] transform -translate-x-1/2 text-white text-center"
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        <div className="text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto relative">
          <motion.div
            className="w-1 h-2 bg-white rounded-full absolute left-[43%] top-2 transform -translate-x-1/2"
            animate={{
              y: [0, 16, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HorizontalScrollSection;
