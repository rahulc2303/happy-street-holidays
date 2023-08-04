import React from "react";
import "./AboutPageHolidays.css"

const AboutPageHolidays = () => {
  return <>



    <div className="h-[480px] w-full relative about-us-banner">
      {/* <img src="https://preview.colorlib.com/theme/travelo/img/banner/bradcam3.png.webp" alt="" className="w-full h-[480px] bg-cover bg-no-repeat" /> */}
      <div className="absolute bottom-1/2 text-center w-full">
        <h1 className="font-on-banner-about align-middle"> About Us </h1>
        <p className="text-white">Pixel perfect design with awesome contents</p>

      </div>
    </div>

    <div className=" flex justify-center ">

      <div className="w-10/12 my-10 text-5xl">
        <h2 className="font-Rubik">Our Story</h2>
        <div className="flex justify-center">
          <p className="w-5/6 text-base my-10 text-gray-600 leading-loose pr-48 ">
            Welcome to Happy Street Holidays, your premier travel partner for creating unforgettable journeys. Established in 2020 in the picturesque town of Sangamner, we have since expanded our reach to multiple branches across Sangamner, Nashik, Pune, and Hubli. With a commitment to crafting exceptional travel experiences, we offer a comprehensive range of services, including tailor-made packages, group tours, and specialized honeymoon getaways.


            <p className=" text-base my-10 text-gray-600 leading-loose ">
              Our Journey and Expertise

              At Happy Street Holidays, we believe that every journey is a story waiting to be told. Our journey began in 2020 with a vision to transform ordinary trips into extraordinary memories. Over the years, we have meticulously curated a team of travel enthusiasts, experts, and partners who share our passion for exploration. This amalgamation of creativity, knowledge, and dedication allows us to design vacations that resonate with your desires.
            </p>
          </p>

        </div>

      </div>
    </div>
  </>;
};

export default AboutPageHolidays;
