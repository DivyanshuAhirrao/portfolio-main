import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        
        <div className="mt-2">
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Portfolio
          </a>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Contact
          </a>
        </div>
        <p className="pt-12 opacity-55 text-sm">©Copyright 2024 Divyanshu's Personal Portfoilio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
