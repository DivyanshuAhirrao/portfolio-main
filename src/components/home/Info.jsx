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
              .callFunction(() => {
                console.log("String typed out!");
              })
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
            I am a Enthusiast Software Engineer. I love to explore new technologies
        and leverage them to solve real-life problems. I am a passionate learner
        and always ready to learn and work across technologies and domains . I
        am currently working on my MERN stack skills and exploring new
        technologies. I am also open to work on any Web Development and Web
        Design opportunities. Whenever possible, I also apply my passion for
        developing products with HTML/CSS and Modern Javascript Library and
        Frameworks like React.js, tailwindCSS, SwiperJS, NodeJS, Cloud
        Deployment any other services ...
      </p>
    </div>
  );
};

export default Info;
