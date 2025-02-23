import Typewriter from "typewriter-effect";

const Info = () => {
  return (
    <div className="flex flex-col gap-2 w-[100%] pl-5 relative xs:top-[2vw]">
      <p className="bg-gradient-to-r from-blue-800 via-green-500 to-indigo-500 text-transparent bg-clip-text font-bold text-left xs:text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] opacity-90">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Myself Divyanshu Ahirrao !!")
              .callFunction(() => {})
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </p>

      <p className=" w-[80%] text-justify font-serif text-gray-600 text-[16px]">
        I am a passionate Software Engineer with a strong enthusiasm for
        exploring new technologies to solve real-world problems. A dedicated
        learner, I thrive in diverse domains and enjoy working across various
        tech stacks. Currently, I am sharpening my MERN stack skills while
        expanding my expertise in AWS, TypeScript, and Firebase for
        authentication and authorization integrations. I am also eager to
        contribute to Web Development and Web Design projects, utilizing tools
        like React.js, TailwindCSS, SwiperJS, Node.js, and cloud deployment
        services to create seamless, efficient, and scalable solutions.
      </p>
    </div>
  );
};

export default Info;
