import Lottie from "react-lottie";
import ScrollTriggerDirectionalMovement from "./ScrollTrigger";
import creative from "../media/creative.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CreativityWrapper = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: creative,
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main id="creative-box">
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        id="custom-scrollbar"
        className="vignette pt-3 w-[100%] gap-6 overflow-hidden sm:h-[100vh] xs:h-min"
      >
        <article className="h-[15vh]">
          <div className="txt text-white" id="txt">
            <b>C</b>
            <b>R</b>
            <b>E</b>
            <b>A</b>
            <b>T</b>
            <b>I</b>
            <b>V</b>
            <b>E</b>
          </div>
        </article>
        <article className="h-[80%] flex xs:flex-wrap sm:flex-wrap lg:flex-nowrap xl:flex-nowrap">
          <aside className=" xs:w-[100%] sm:w-[30%] xs:pl-0 sm:pl-6 h-[100%] flex justify-center items-center">
            <div className="relative xs:bottom-10 sm:bottom-0 xs:w-[50%] sm:w-[100%]">
              <Lottie options={defaultOptions} />
            </div> 
          </aside>
          <aside className="xs:w-[100%] sm:w-[75%] xs:h-[50vh] sm:h-[80vh] ">
            <div className="xs:h-[350px] sm:h-min xs:bg-cover xs:w-[100%] relative bottom-[10%] xs:scale-100 sm:scale-[0.75] hover:scale-[0.8] transition-all duration-300 border-2 shadow-lg shadow-emerald-900 rounded-xl overflow-hidden">
              <ScrollTriggerDirectionalMovement />
            </div>
          </aside>
        </article>
      </div>
    </main>
  );
};

export default CreativityWrapper;
