import { Fragment } from "react";

const Menu = () => {
  const navLinks = [
    { label: "Home",     href: "#home" },
    { label: "Services", href: "#horizontal-section" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contacts" },
  ];

  const scrollToSection = (href) => {
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav-menu">
      <ul className="flex gap-3 pt-2">
        {navLinks.map((link, i) => {
          return (
            <Fragment key={i}>
              <li>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-[16px] font-mono transition-all duration-200 px-2 py-[2px] hover:bg-lime-100 dark:hover:bg-lime-800 hover:text-blue-950 dark:hover:text-lime-100 rounded-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {link.label}
                </a>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
