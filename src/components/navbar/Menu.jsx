import { Fragment } from "react";

const Menu = () => {
  const navLinks = ["Home", "Services", "Projects", "Contact"];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav-menu">
      <ul className="flex gap-3 pt-2">
        {navLinks.map((e, i) => {
          return (
            <Fragment key={i}>
              <li 
                onClick={() => scrollToSection(e)}
                className="text-[16px] font-mono hover:cursor-pointer transition-all duration-200 px-2 py-[2px] hover:bg-lime-100 dark:hover:bg-lime-800 hover:text-blue-950 dark:hover:text-lime-100 rounded-[5px]"
              >
                {e}
              </li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
