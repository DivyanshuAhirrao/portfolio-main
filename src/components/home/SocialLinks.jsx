import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import cv from "../media/Divyanshu_CV.pdf";
const SocialLinks = () => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/7972814411`;
    window.open(whatsappUrl, "_blank");
  };
  const socialData = [
    { href: "#", icon: FaFacebook, hoverClass: "hover:text-blue-600" },
    {
      href: "https://www.instagram.com/iam.divyanshu?igsh=MWZIZDc2N2hmZXRyYw==",
      icon: FaInstagram,
      hoverClass: "hover:text-pink-700",
    },
    {
      href: "https://www.linkedin.com/in/divyanshu-ahirrao-038537245/",
      icon: FaLinkedin,
      hoverClass: "hover:text-purple-700",
    },
    {
      onClick: handleClick,
      icon: ImWhatsapp,
      hoverClass: "hover:text-green-500",
    },
    {
      href: "https://github.com/DivyanshuAhirrao",
      icon: FaGithub,
      hoverClass: "hover:text-orange-700",
    },
  ];
  return (
    <>
      <section className="pl-5 xs:pt-4 sm:pt-8">
        <article className="flex gap-4 text-[20px]">
          {socialData.map((link, index) => (
            <a
              key={index}
              href={link.href || undefined}
              onClick={link.onClick || undefined}
              className={`${link.hoverClass} cursor-pointer transition-all duration-200`}
            >
              <link.icon />
            </a>
          ))}
        </article>

        <article className="flex gap-3 pt-4">
          <a href="mailto:246divyanahuahirrao@gmail.com">
            <button className="relative top-[2px] py-2 px-6 bg-gray-700 text-gray-200 rounded-[5px] hover:text-gray-700 hover:border-2 hover:border-gray-800 hover:bg-gray-200 transition-all duration-200">
              HIRE ME
            </button>
          </a>

          <a href={cv} download>
            <button className="py-[7.2px] px-6 border-2 border-gray-800 hover:bg-gray-700 transition-all duration-200 hover:text-gray-200 text-gray-700 rounded-[5px]">
              DOWNLOAD CV
            </button>
          </a>
        </article>
      </section>
    </>
  );
};
export default SocialLinks;
