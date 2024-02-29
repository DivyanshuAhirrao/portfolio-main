'use client';
import { Carousel } from 'flowbite-react';
import img1 from '../media/img1.jpg';
import img2 from '../media/img2.jpg';
import img3 from '../media/img3.jpg';
import img4 from '../media/img4.jpg';
import img5 from '../media/img5.jpg';

const ImageCarousel = () => {
  return (
    <div className="relative top-64 z-10">
      <Carousel slideInterval={5000}>
        <img src={img1} alt="pic" />
        <img src={img2} alt="pic" />
        <img src={img3} alt="pic" />
        <img src={img4} alt="pic" />
        <img src={img5} alt="pic" />
      </Carousel>
    </div>
  );
}

export default ImageCarousel;