import { useEffect } from "react";
import pro from "../media/profile.jpg";
import Info from "./Info";
import SocialLinks from "./SocialLinks";
import Lottie from "react-lottie";
import hi from "../media/hi.json";
import AOS from "aos";
import "aos/dist/aos.css";

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
      data-aos="fade-up"
      data-aos-duration="2000"
      id="home"
      className="py-2 flex flex-wrap"
    >
      <aside className="xs:w-[100%] sm:min-w-[600px] md:w-[50%] pt-20 h-[100%] flex justify-center items-center">
        <img
          src={pro}
          alt="img"
          className="blinker xs:hidden sm:block rounded-[50%] h-[25vw] border-2 border-gray-700"
        />
        <div className=" xs:block sm:hidden w-[100%] relative bottom-20 xs:h-[32vw]">
          <aside className="w-[60%]">
            <img
              src={pro}
              alt="imgs"
              className="scale-75 rounded-[50%] shadow-md shadow-gray-500"
            />
          </aside>
          <aside className="w-[40%] absolute top-5 right-4">
            <Lottie options={defaultOptions} width={170} />
          </aside>
        </div>
      </aside>
      <aside className="xs:w-[100%] sm:min-w-[600px] md:w-[50%] h-[100%] text-center">
        <div className="pt-12 flex flex-col gap-2">
          <Info />
          <SocialLinks />
        </div>
      </aside>
    </div>
  );
};

export default Home;
