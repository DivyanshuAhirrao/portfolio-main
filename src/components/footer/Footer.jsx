const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navItems = [
    { label: "Home",      href: "#home" },
    { label: "About",     href: "#home" },
    { label: "Portfolio", href: "#projects" },
    { label: "Contact",   href: "#contacts" },
  ];
  return (
    <footer className="bg-black text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <nav aria-label="Footer Navigation" className="mt-2">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="text-gray-300 hover:text-white mx-2 transition-colors duration-200">
              {item.label}
            </a>
          ))}
        </nav>
        <p className="pt-12 opacity-55 text-sm">
          &copy; Copyright{" "}
          <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
          Divyanshu&apos;s Personal Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
