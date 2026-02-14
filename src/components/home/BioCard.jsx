import Lottie from "react-lottie";
import pro from "../media/dev-icon.json";
import "./bio.css";
import RotatingTitle from "./RotatingTitle";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function BioCard() {

  return (
    <section className="thought-wrapper">
      <div className="thought-card">
        <div className="tweet-support flex gap-1 text-orange-500">
          <span>
         Inquiries
        </span> 
        <span>
          <FaArrowTrendUp />
        </span>
        </div>
        
        <div className="tweet-head">
          <div className="tweet-icon">
             <Lottie width={90} options={{
                            autoplay: true,
                            animationData: pro,
                            rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice",
                            loop: true,
                            },
                          }}
              />
          </div>
          <div className="tweet-details">
            <p className="name-text">Divyanshu Ahirrao</p>
            <RotatingTitle />
          </div>
        </div>

        

        <p className="thought-text text-gray-600 dark:text-gray-300">
          Full-Stack Software Engineer specializing in building scalable, high-performance web applications with a strong emphasis on intuitive UI/UX and seamless user experiences. Experienced in React-TS, Java, Spring Boot, and cloud-native architectures, Design secure, microservices-based systems that are optimized for performance and reliability. By combining clean code practices, AWS-powered cloud monitoring, and customer-focused design, I deliver impactful digital solutions that enhance user engagement and drive measurable revenue growth.
        </p>

        <div className="tweet-footer">
          <span>🚀 • MERN • Java • Databases • Cloud </span>
        </div>

      </div>
    </section>
  );
}
