import React, { useState } from "react";
import "./Testomonial.css";

const testimonial = [
  {
    id: 1,
    name: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, purus ut scelerisque aliquet, diam libero sollicitudin ligula.",
    avatar:
      "	https://preview.colorlib.com/theme/travelo/img/testmonial/author.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    content:
      "Ut at mollis nulla. Sed nec quam quam. Maecenas nec nisi auctor, interdum neque id, dignissim tortor.",
    avatar:
      "	https://preview.colorlib.com/theme/travelo/img/testmonial/author.png",
  },
  {
    id: 3,
    name: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, purus ut scelerisque aliquet, diam libero sollicitudin ligula.",
    avatar:
      "	https://preview.colorlib.com/theme/travelo/img/testmonial/author.png",
  },
  // Add more testimonials here
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden testo-main-div my-5">
      <div className="bg-#F7FAFD rounded-lg  w-7/12 respo-content-cls">
        <div className="relative h-400px">
          {/* <div className="mb-4 text-center">
                        <h2 className="text-xl font-semibold text-gray-800">Testimonials</h2>
                    </div> */}
          <div className="relative ">
            {testimonial.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transform transition-all duration-300 ${index === activeIndex
                  ? "opacity-100 "
                  : "opacity-0 translate-x-full"
                  }`}
              >
                <div className="items-center mb-2 text-center">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-20 h-20 rounded-full text-center justify-center m-auto mb-2"
                  />
                  <p className="mt-6 font-semibold text-center">
                    {testimonial.content}
                  </p>
                </div>
                <p className="mt-6 text-gray-600 text-center justify-center">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-56 dot-respo-cls">
          {testimonial.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
