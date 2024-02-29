import { useEffect } from "react";
import img1 from "../media/laptop-portfolio.png";
import img2 from "../media/l-shopper.png";
import img3 from "../media/l-delauxia.png";
import img4 from "../media/l-notify.png";
import Lottie from "react-lottie";
import projects from '../media/project.json'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

  useEffect(() =>{
    AOS.init();
  },[])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: projects,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="projects" className="w-[100%] py-12 flex flex-col justify-center items-center">
      <Lottie options={defaultOptions} width={300}/>
      <h1 className="w-[80%] xs:text-[40px] text-center text-[5vw] font-mono font-bold opacity-75">
        Projects
      </h1>
      <p className="text-gray-500 text-[16px] w-[70%] text-justify border-b-2 border-dotted py-4 border-emerald-600">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study.
      </p>
      <section data-aos="flip-left" data-aos-duration="1000" className="w-[80%] flex flex-wrap justify-around items-center">
        <aside  className="lg:scale-150 md:scale-150 sm:scale-125 xs:scale-100  pt-20 h-[300px] w-[300px] flex justify-center items-center">
          <div className="laptop">
            <img
              src={img1}
              alt="inner-pic"
              className=" scale-[0.925] scale-y-[1] relative top-[98px] right-[0.05px]"
            />
          </div>
        </aside>
        <aside className="xs:w-[80%] sm:min-w-[600px] md:w-[50%] h-[100%] relative top-4">
          <div className="pt-12 flex flex-col gap-2">
            <h1 className="font-bold opacity-90 uppercase font-mono lg:text-[3vw] xs:text-[20px] hover:underline hover:underline-offset-8 transition-all duration-300 cursor-pointer">
              Portfolio
            </h1>
            <p>
              • Project has been created using ReactJS + Vite. <br />
              • Project includes Animation Library, simple representation of my
              Career and Tech Stack. <br />• Project has easy and attractive UI
              with standard structure of Website.
            </p>
          </div>
          <a href="/" target="_blank">
            <button className="relative top-2 bg-purple-400 px-2 rounded-md py-[2px] hover:outline-double hover:border-purple-700 hover:bg-gray-100 transition-all duration-200 lg:text-[1.8vw] xs:text-[16px] ">
              View Demo
            </button>
          </a>
        </aside>
      </section>
      <div className="w-[80%] h-[2px] bg-slate-300 relative top-12"></div>
      <section data-aos="flip-right" data-aos-duration="1000"  className="w-[80%] flex flex-wrap-reverse justify-around items-center">
        <aside className="xs:w-[80%] sm:min-w-[600px] md:w-[50%] h-[100%] relative top-4">
          <div className="pt-12 flex flex-col gap-2">
            <h1 className="font-bold opacity-90 uppercase font-mono lg:text-[3vw] xs:text-[20px] hover:underline hover:underline-offset-8 transition-all duration-300 cursor-pointer">
              Shopper-Sparrow
            </h1>
            <p>
              • Project has been created using ReactJS + Vite. <br />
              • Project includes Authentication, Authorization, Landing Page,
              search functionality, filter, add to Cart and dynamic change in
              Cart. <br />• Project has easy and attractive UI with Carousels,
              Animations, Modals, Coupons, Banners, Cards, etc
            </p>
          </div>
          <a href="https://sparrow-shopper.netlify.app/">
            <button className="relative top-2 bg-purple-400 px-2 rounded-md py-[2px] hover:outline-double hover:border-purple-700 hover:bg-gray-100 transition-all duration-200 lg:text-[1.8vw] xs:text-[16px] ">
              View Demo
            </button>
          </a>
        </aside>
        <aside className="lg:scale-150 md:scale-150 sm:scale-125 xs:scale-100 pt-20 h-[300px] w-[300px] flex justify-center items-center">
          <div className="laptop">
            <img
              src={img2}
              alt="inner-pic"
              className=" scale-[0.925] scale-y-[0.98] relative top-[95.5px] right-[-0.3px]"
            />
          </div>
        </aside>
      </section>
      <div className="w-[80%] h-[2px] bg-slate-300 relative top-12"></div>
      <section data-aos="flip-left" data-aos-duration="1000" className="w-[80%] flex flex-wrap justify-around items-center">
        <aside className="lg:scale-150 md:scale-150 sm:scale-125 xs:scale-100  pt-20 h-[300px] w-[300px] flex justify-center items-center">
          <div className="laptop">
            <img
              src={img4}
              alt="inner-pic"
              className=" scale-[0.925] scale-y-[0.98] relative top-[95.5px] right-[-0.3px]"
            />
          </div>
        </aside>
        <aside className="xs:w-[80%] sm:min-w-[600px] md:w-[50%] h-[100%] relative top-4">
          <div className="pt-12 flex flex-col gap-2">
            <h1 className="uppercase font-mono lg:text-[3vw] xs:text-[20px] hover:underline hover:underline-offset-8 transition-all duration-300 cursor-pointer font-bold opacity-90">
              Notification-Pannel
            </h1>
            <p>
              • Project is built on React-Typescript with json-server as back
              end. Includes Authentication, Authorization, and two layers that
              is Admin and User. <br />• Project Admin page has functionality to
              like and save post of user and comment globally. Whereas User page
              shows the User details in Graphical manner and has notification
              section where all notifications are seen.
            </p>
          </div>
          <a href="https://github.com/DivyanshuAhirrao/notification-panel">
            <button className="relative top-2 bg-purple-400 px-2 rounded-md py-[2px] hover:outline-double hover:border-purple-700 hover:bg-gray-100 transition-all duration-200 lg:text-[1.8vw] xs:text-[16px] ">
              View Demo
            </button>
          </a>
        </aside>
      </section>
      <div className="w-[80%] h-[2px] bg-slate-300 relative top-12"></div>
      <section data-aos="flip-right" data-aos-duration="1000" className="w-[80%] flex flex-wrap-reverse justify-around items-center">
        <aside className="xs:w-[80%] sm:min-w-[600px] md:w-[50%] h-[100%] relative top-4">
          <div className="pt-12 flex flex-col gap-2">
            <h1 className="font-bold opacity-90 uppercase font-mono lg:text-[3vw] xs:text-[20px] hover:underline hover:underline-offset-8 transition-all duration-300 cursor-pointer">
              Deluxia
            </h1>
            <p>
              • DELUXIA is my Primary Project which is purely Developed on
              Frontend basis. <br />
              • The Technologies/Languages used were ReactJS, Bootstrap, Html,
              CSS, Javascript, NodeJS, etc… <br />
              • Project offers the structured manner UI/UX and smooth
              functionality which user loves the best about DELUXIA. <br />•
              Henceforth, will soon be Developing the whole application with
              proper Buisness Development Strategy and Deploying it too main
              server.
            </p>
          </div>
          <a href="https://deluxiabydivyanshu.netlify.app/">
            <button className="relative top-2 bg-purple-400 px-2 rounded-md py-[2px] hover:outline-double hover:border-purple-700 hover:bg-gray-100 transition-all duration-200 lg:text-[1.8vw] xs:text-[16px] ">
              View Demo
            </button>
          </a>
        </aside>
        <aside className="lg:scale-150 md:scale-150 sm:scale-125 xs:scale-100  pt-20 h-[300px] w-[300px] flex justify-center items-center">
          <div className="laptop">
            <img
              src={img3}
              alt="inner-pic"
              className=" scale-[0.926] scale-y-[0.98] relative top-[95.5px] right-[-0.3px]"
            />
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Projects;
