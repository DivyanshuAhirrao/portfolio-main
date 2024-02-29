import { Fragment } from "react";

const Menu = () => {
  const navLinks = ["Home", "Services", "Projects", "Contact"];
  return (
    <div className="nav-menu">
      <ul className=" flex gap-3 pt-2">
        {navLinks.map((e, i) => {
          return (
            <Fragment key={i}>
              <li className="text-[16px] font-mono hover:cursor-pointer transition-all duration-200 px-2 py-[2px] hover:bg-lime-100 hover:text-blue-950 rounded-[5px] ">
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
