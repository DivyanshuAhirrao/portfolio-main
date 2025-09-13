import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { EXPERIENCE } from "../utils/constants";

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    gsap.fromTo(
      timeline,
      { height: 0 },
      {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    itemRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          Experience
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-600 dark:bg-emerald-400 h-0 transition-colors duration-300"
            ref={timelineRef}
          ></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="flex items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="w-1/2 pr-8 text-right text-gray-900 dark:text-gray-100 transition-colors duration-300">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-emerald-600 dark:text-emerald-400">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </p>
                      <p className="mt-2 lg:block sm:block xl:block xs:hidden">{exp.description}</p>
                    </div>
                    <div className="w-4 h-4 bg-emerald-600 dark:bg-emerald-400 rounded-full relative z-10 transition-colors duration-300"></div>
                    <div className="w-1/2 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-4 h-4 bg-emerald-600 dark:bg-emerald-400 rounded-full relative z-10 transition-colors duration-300"></div>
                    <div className="w-1/2 pl-8 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-emerald-600 dark:text-emerald-400">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </p>
                      <p className="mt-2 lg:block sm:block xl:block xs:hidden">{exp.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
