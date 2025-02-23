const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navItems = ["Home", "About", "Portfolio", "Contact"];
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <nav aria-label="Footer Navigation" className="mt-2">
          {navItems.map((item, index) => (
            <span key={index} className="text-gray-300 hover:text-white mx-2">
              {item}
            </span>
          ))}
        </nav>
        <p className="pt-12 opacity-55 text-sm">
          © Copyright{" "}
          <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
          Divyanshu's Personal Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
