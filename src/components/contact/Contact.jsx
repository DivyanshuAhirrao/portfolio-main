import { useEffect } from "react";
import Form from "./Form";
import TextArea from "./TextArea";
import HoverRating from "./Rating";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="contacts"
      className="w-[100%] flex flex-col justify-center items-center py-6"
    >
      <h2 className="uppercase w-[100%] text-center xs:text-[40px] text-[5vw] font-mono font-bold opacity-75">
        Contact
      </h2>
      <p className="text-center text-gray-500 xs:text-[16px] sm:text-[20px] w-[80%] border-b-2 border-dotted py-4 border-emerald-600">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <main className="w-[85%] flex flex-wrap">
        <aside
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-[50%]  min-w-[340px]"
        >
          <Form />
        </aside>
        <aside  data-aos="zoom-in-left" className="mt-8 w-[50%] h-[100%] min-w-[340px] h-[100%] flex justify-center flex-col ">
          <TextArea />
          <HoverRating />
        </aside>
      </main>
    </section>
  );
};

export default Contact;
