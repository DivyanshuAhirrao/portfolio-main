"use client";
import { Carousel } from "flowbite-react";
import img1 from "../media/img1.jpg";
import img2 from "../media/img2.jpg";
import img3 from "../media/img3.jpg";
import img4 from "../media/img4.jpg";
import img5 from "../media/img5.jpg";

const ImageCarousel = () => {
  const imageSources = [img1, img2, img3, img4, img5];
  return (
    <div className="relative top-64 z-10">
      <Carousel slideInterval={5000}>
        {imageSources.map((src, index) => (
          <img key={index} src={src} alt={`pic-${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
