import ViewButton from "./ViewButton";

/* eslint-disable react/prop-types */
const ProjectTile = ({
  key,
  imgSrc,
  title,
  description,
  link,
  aosEffect,
  aosDuration = '1000',
  flexPosition
}) => {
    
  return (
    <section
      data-aos={aosEffect}
      data-aos-duration={aosDuration}
      className={`w-[80%] flex ${flexPosition} justify-around items-center`}
    >
      <aside className="lg:scale-150 md:scale-150 sm:scale-125 xs:scale-100 pt-20 h-[300px] w-[300px] flex justify-center items-center">
        <div className="laptop">
          <img
            src={imgSrc}
            alt={`thumnail+${key}`}
            className="scale-[0.925] scale-y-[1] relative top-[98px] right-[0.05px]"
          />
        </div>
      </aside>
      <aside className="xs:w-[80%] sm:min-w-[600px] md:w-[50%] h-[100%] relative top-4">
        <div className="pt-12 flex flex-col gap-2">
          <h1 className="font-bold opacity-90 uppercase font-mono lg:text-[3vw] xs:text-[20px] hover:underline hover:underline-offset-8 transition-all duration-300 cursor-pointer">
            {title}
          </h1>
          <p>{description}</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
         <ViewButton />
        </a>
      </aside>
    </section>
  );
};

export default ProjectTile;
