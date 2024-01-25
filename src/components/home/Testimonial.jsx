"use client";
 
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Testimonial = ({ testimonials }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <Slider {...settings} arrows={false}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="item">
          <div className="feedback-block-twelve">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <Image 
                width={25} 
                height={25} 
                src="/images/icon/icon_180.svg"
                alt={testimonial.name} />
            </div> 
            <p className="tx-dark mt-35 mb-40 pe-xxl-4">
              { testimonial.feedback }  
            </p>          
            <h6 className="tx-dark fs-20"> 
              {testimonial.name},
              <span className="fw-normal opacity-50">
                &nbsp; {testimonial.address}
              </span>
            </h6>
          </div>
          {/* /.feedback-block-twelve */}
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;

