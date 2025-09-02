import Typewriter from "typewriter-effect";

const Info = () => {
  return (
    <div className="flex flex-col gap-2 w-[100%] pl-5 relative xs:top-[2vw]">
      <p className="bg-gradient-to-r from-blue-800 via-green-500 to-indigo-500 dark:from-blue-400 dark:via-green-400 dark:to-indigo-400 text-transparent bg-clip-text font-bold text-left xs:text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] opacity-90">
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

      <p className="w-[80%] text-justify font-serif text-gray-600 dark:text-gray-300 text-[16px] transition-colors duration-300">
       A results-driven and passionate Software Engineer with hands-on experience in designing, developing, and deploying scalable web applications using Java, Spring Frameworks, and the MERN stack (MongoDB, Express, ReactJS, NodeJS). Adept at building responsive UI/UX with HTML, CSS, TypeScript, and modern JavaScript frameworks, leveraging tools like Tailwind CSS and SwiperJS to deliver high-quality products. Skilled in cloud-based development and deployment, utilizing Docker and AWS for robust infrastructure management. Proactive in continuous learning and cross-domain exploration, with the ability to collaborate across teams, adapt to emerging technologies, and solve complex real-world problems using innovative engineering solutions.
      </p>
    </div>
  );
};

export default Info;
