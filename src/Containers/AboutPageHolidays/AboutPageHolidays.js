import React from "react";
import NavBarHolidays from "../../Components/NavBarHolidays/NavBarHolidays";
import TestimonialCarousel from "./../../Components/Testomonial/Testomonial";
import FooterHolidays from "../../Components/FooterHolidays/FooterHolidays";
import "./AboutPageHolidays.css";

const AboutPageHolidays = () => {
  return (
    <>
      <NavBarHolidays />

      <div className="h-[480px] w-full relative about-us-banner">
        {/* <img src="https://preview.colorlib.com/theme/travelo/img/banner/bradcam3.png.webp" alt="" className="w-full h-[480px] bg-cover bg-no-repeat" /> */}
        <div className="absolute bottom-1/2 text-center w-full">
          <h1 className="font-on-banner-about align-middle"> About Us </h1>
          <p className="text-white">
            Pixel perfect design with awesome contents
          </p>
        </div>
      </div>

      <div className=" flex justify-center md:w-full">
        <div className="w-10/12 mb-10 mt-10 text-3xl">
          <h2 className="font-Rubik">Our Story</h2>
          <div className="flex justify-center">
            <p className="w-5/6 text-base mt-10 text-gray-600 leading-loose pr-48 para-in-about-page-respo">
              Welcome to Happy Street Holidays, your premier travel partner for
              creating unforgettable journeys. Established in 2020 in the
              picturesque town of Sangamner, we have since expanded our reach to
              multiple branches across Sangamner, Nashik, Pune, and Hubli. With
              a commitment to crafting exceptional travel experiences, we offer
              a comprehensive range of services, including tailor-made packages,
              group tours, and specialized honeymoon getaways.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center ">
        <div className="w-10/12 mb-10 text-3xl">
          <h2 className="font-Rubik">Our Journey and Expertise</h2>
          <div className="flex justify-center">
            <p className="w-5/6 text-base mt-10 text-gray-600 leading-loose pr-48 para-in-about-page-respo">
              At Happy Street Holidays, we believe that every journey is a story
              waiting to be told. Our journey began in 2020 with a vision to
              transform ordinary trips into extraordinary memories. Over the
              years, we have meticulously curated a team of travel enthusiasts,
              experts, and partners who share our passion for exploration. This
              amalgamation of creativity, knowledge, and dedication allows us to
              design vacations that resonate with your desires.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center ">
        <div className="w-10/12 mb-10 text-3xl">
          <h2 className="font-Rubik">Our Services</h2>
          <div className="flex justify-center">
            <p className="w-5/6 text-base mt-10 text-gray-600 leading-loose pr-48 para-in-about-page-respo ">
              <b>Customized Packages: </b>We understand that no two travelers
              are alike, which is why we specialize in creating personalized
              travel experiences. Whether you dream of strolling through
              historic European cities, lounging on tropical beaches, or
              embarking on an adventurous escapade, our team will meticulously
              tailor an itinerary to match your preferences.
              <p>
                <b> Group Tours:</b> Embarking on a journey with like-minded
                individuals can be truly enriching. Our group tours provide the
                perfect balance of camaraderie and exploration. From cultural
                immersions to thrilling adventures, our group tours encompass a
                wide range of interests and destinations.
              </p>
              <p>
                <b>Honeymoon Getaways:</b> Begin your marital journey with the
                enchantment of our handcrafted honeymoon packages.
                Picture-perfect destinations, luxurious accommodations, and
                thoughtful inclusions set the stage for an unforgettable
                romantic experience.
              </p>
              <p>
                <b> Domestic and International Destinations:</b> Explore the
                vibrant tapestry of India or traverse continents with our
                diverse selection of domestic and international destinations.
                From the majestic Himalayas to the serene backwaters of Kerala,
                and from the historic marvels of Europe to the exotic charm of
                Southeast Asia, we cover the globe.
              </p>
              <p>
                <b>All-Inclusive Tour Services:</b> We take care of every
                detail, so you can focus solely on making memories. Our
                all-inclusive tour services encompass flights, accommodations,
                transfers, guided tours, and more, ensuring a hassle-free and
                enjoyable vacation.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center ">
        <div className="w-10/12 mb-10 text-3xl">
          <h2 className="font-Rubik">Our Commitment</h2>
          <div className="flex justify-center">
            <p className="w-5/6 text-base mt-10 text-gray-600 leading-loose pr-48 para-in-about-page-respo">
              At Happy Street Holidays, we pride ourselves on our unwavering
              commitment to quality, authenticity, and customer satisfaction.
              Our team's passion for travel is matched only by our dedication to
              providing seamless experiences that exceed expectations. Each
              journey we craft is a testament to our commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <TestimonialCarousel />

      {/* Footer Section */}
      <FooterHolidays />
    </>
  );
};

export default AboutPageHolidays;
