import { useEffect } from "react";
import img1 from "../media/laptop-portfolio.png";
import img2 from "../media/l-shopper.png";
import img3 from "../media/l-delauxia.png";
import img4 from "../media/l-notify.png";
import img5 from "../media/l-roamingo.png";

import Lottie from "react-lottie";
import projects from "../media/project.json";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectTile from "./ProjectTile";

const projectsData = [
  {
    title: "Portfolio",
    description: (
      <>
        • Project has been created using ReactJS + Vite. <br />
        • Project includes Animation Library, simple representation of my Career
        and Tech Stack.
        <br />• Project has easy and attractive UI with standard structure of
        Website.
      </>
    ),
    image: img1,
    link: "/",
    aosAnimation: "flip-left",
  },
  {
    title: "Shopper-Sparrow",
    description: (
      <>
        • Project has been created using ReactJS + Vite.
        <br />
        • Project includes Authentication, Authorization, Landing Page, search
        functionality, filter, add to Cart and dynamic change in Cart.
        <br />• Project has easy and attractive UI with Carousels, Animations,
        Modals, Coupons, Banners, Cards, etc.
      </>
    ),
    image: img2,
    link: "https://sparrow-shopper.netlify.app/",
    aosAnimation: "flip-right",
  },
  {
    title: "RoaminGo",
    description: (
      <>
        • Roamingo is Travel related project built with NextJs.
        <br />
        • The Technologies/Languages used were NextJS, tailwind CSS,
        React-Spring, ExpressJs(backend) <br />• There will be the addition of
        features : Payment Functionality, Bus Tracking, Review System and
        Authentication
      </>
    ),
    image: img5,
    link: "https://roamingo-divyanshu.netlify.app",
    aosAnimation: "flip-left",
  },
  {
    title: "Notification-Panel",
    description: (
      <>
        • Project is built on React-Typescript with json-server as back end.
        Includes Authentication, Authorization, and two layers that is Admin and
        User. <br></br>• Project Admin page has functionality to like and save
        post of user and comment globally. Whereas User page shows the User
        details in Graphical manner and has notification section where all
        notifications are seen.
      </>
    ),
    image: img4,
    link: "https://github.com/DivyanshuAhirrao/notification-panel",
    aosAnimation: "flip-right",
  },
  {
    title: "Deluxia",
    description: (
      <>
        • DELUXIA is my Primary Project which is purely Developed on Frontend
        basis.
        <br />
        • The Technologies/Languages used were ReactJS, Bootstrap, Html, CSS,
        Javascript, NodeJS, etc…
        <br />
        • Project offers the structured manner UI/UX and smooth functionality
        which user loves the best about DELUXIA.
        <br />• Henceforth, will soon be Developing the whole application with
        proper Buisness Development Strategy and Deploying it too main server.
      </>
    ),
    image: img3,
    link: "https://deluxiabydivyanshu.netlify.app/",
    aosAnimation: "flip-left",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: projects,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      id="projects"
      className="w-[100%] py-12 flex flex-col justify-center items-center bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <Lottie options={defaultOptions} width={300} />
      <h1 className="w-[80%] xs:text-[40px] text-center text-[5vw] font-mono font-bold opacity-75 text-gray-900 dark:text-gray-100">
        Projects
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-[16px] w-[70%] text-justify border-b-2 border-dotted py-4 border-emerald-600 dark:border-emerald-400 transition-colors duration-300">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study.
      </p>
      {projectsData.map((e, index) => (
        <ProjectTile
          key={index}
          imgSrc={e.image}
          title={e.title}
          description={e.description}
          link={e.link}
          flexPosition={index % 2 == 0 ? "flex-wrap" : "xl:flex-row-reverse sm:flex-wrap xs:flex-wrap"}
          aosEffect={e.aosAnimation}
        />
      ))}
    </div>
  );
};

export default Projects;
