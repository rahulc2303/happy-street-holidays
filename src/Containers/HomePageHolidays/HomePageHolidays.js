import React from "react";
import NavBarHolidays from "./../../Components/NavBarHolidays/NavBarHolidays";
import Slider from "./../../Components/HomeScreenSlider/Slider";
import { PopularDestinationCard2 } from "./../../Components/PopularDestinationCard2/PopularDestinationCard2";
import { PopularPlacesCard } from "../../Components/PopularPlacesCard/PopularPlacesCard";
import FooterHolidays from "./../../Components/FooterHolidays/FooterHolidays";
import { RecentTripComponent } from "../../Components/RecentTripComponent/RecentTripComponent";
import TestimonialCarousel from "../../Components/Testomonial/Testomonial";
import TravelVariationComponent from "./../../Components/TravelVariationComponent/TravelVariationComponent";
import "./HomePageHolidays.css";

const HomePageHolidays = () => {
  const popularplacescards = [
    {
      id: 1,
      title: "Italy",
      placecount: "07 Places",
      imageSrc:
        "https://images.unsplash.com/photo-1571067295991-a359d382020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Dubai",
      placecount: "05 Places",
      imageSrc:
        "https://images.unsplash.com/photo-1571067295991-a359d382020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Dubai",
      placecount: "05 Places",
      imageSrc:
        "https://images.unsplash.com/photo-1571067295991-a359d382020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Dubai",
      placecount: "05 Places",
      imageSrc:
        "https://images.unsplash.com/photo-1571067295991-a359d382020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Dubai",
      placecount: "05 Places",
      imageSrc:
        "https://images.unsplash.com/photo-1571067295991-a359d382020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Dubai",
      placecount: "05 Places",
      imageSrc:
        "https://images.unsplash.com/photo-1571067295991-a359d382020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const populardestinationcards = [
    {
      id: 1,
      destinations: "California",
      description: "United State of America",
      ratings: "4",
      imageSrc: "https://preview.colorlib.com/theme/travelo/img/place/1.png",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 1,
      destinations: "California",
      description: "United State of America",
      ratings: "4",
      imageSrc: "https://preview.colorlib.com/theme/travelo/img/place/1.png",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 1,
      destinations: "California",
      description: "United State of America",
      ratings: "4",
      imageSrc: "https://preview.colorlib.com/theme/travelo/img/place/1.png",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 1,
      destinations: "California",
      description: "United State of America",
      ratings: "4",
      imageSrc: "https://preview.colorlib.com/theme/travelo/img/place/1.png",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 1,
      destinations: "California",
      description: "United State of America",
      ratings: "4",
      imageSrc: "https://preview.colorlib.com/theme/travelo/img/place/1.png",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 1,
      destinations: "California",
      description: "United State of America",
      ratings: "4",
      imageSrc: "https://preview.colorlib.com/theme/travelo/img/place/1.png",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
  ];
  const recenttripscards = [
    {
      id: 1,
      date: "Sept 22, 2023",
      imgSrc: "https://preview.colorlib.com/theme/travelo/img/trip/1.png",
      descriptions: "United State of America",
    },
    {
      id: 1,
      date: "Sept 22, 2023",
      imgSrc: "https://preview.colorlib.com/theme/travelo/img/trip/1.png",
      descriptions: "United State of America",
    },
    {
      id: 1,
      date: "Sept 22, 2023",
      imgSrc: "https://preview.colorlib.com/theme/travelo/img/trip/1.png",
      descriptions: "United State of America",
    },
  ];
  return (
    <>
      {/* Home screen container for Happy Street Holidays this will include which shows on home screen */}
      {/* Main flex container for the home screen */}
      {/* section for the main navbar */}
      <div className="main-navbar-for-the-happy-street-holidays">
        <NavBarHolidays />
      </div>
      {/* Slider component for the carousel that appears on home screen after navbar for different places  */}
      <div className="slider-component-for-the-main-home-page">
        {/* <Slider /> */}
      </div>{" "}
      <div className="flex-container-for-the-home-screen-container">
        {/* width specific 75em for the middle section of HomePage */}
        <div className="width-specific-75em-for-the-home-page-middle-sections">
          {/* Section for different places component */}
          <div className="section-for-the-different-places-component">
            {/* heading for the different places  */}
            <div className="heading-text-and-the-description-for-the-different-places-section">
              <p className="heading-for-the-different-places-section">
                Popular Places
              </p>
              <p className="description-for-the-different-places-section">
                Suffered alteration in some form, by injected humour or good day
                randomised booth anim 8-bit hella wolf moon beard words.
              </p>
            </div>
            <div className="import-component-popular-places-cards">
              {popularplacescards.map((val, index) => (
                <PopularPlacesCard PopularPlaceCardDetails={val} />
              ))}
              {/* <PopularPlacesCard /> */}
            </div>
          </div>

          {/* Section for different destinations component */}
          <div className="section-for-the-different-destinations-component">
            {/* heading for the different destinations  */}
            <div className="heading-text-and-the-description-for-the-different-destinations-section">
              <p className="heading-for-the-different-destinations-section">
                Popular Destinations
              </p>
              <p className="description-for-the-different-destinations-section">
                Suffered alteration in some form, by injected humour or good day
                randomised booth anim 8-bit hella wolf moon beard words.
              </p>
            </div>
            <div className="import-component-popular-destination-cards">
              {populardestinationcards.map((val, index) => (
                <PopularDestinationCard2 PopularDestinationCardDetails={val} />
              ))}
              {/* <PopularDestinationCard2 /> */}
            </div>
          </div>
          {/* Section for Recent Trips component */}
          <div className="mb-40 section-for-the-recent-trips-component">
            {/* heading for the recent trips */}
            <div className="heading-text-and-the-description-for-the-recent-trips-section">
              <p className="heading-for-the-recent-trips-section">
                Recent Trips
              </p>
              <p className="description-for-the-recent-trips-section">
                Suffered alteration in some form, by injected humour or good day
                randomised booth anim 8-bit hella wolf moon beard words.
              </p>
            </div>
            <div className="import-component-recent-trips-cards">
              {recenttripscards.map((val, index) => (
                <RecentTripComponent RecentTripsDetails={val} />
              ))}
              {/* <PopularDestinationCard2 /> */}
            </div>
          </div>
          {/* travel variation component */}
          <TravelVariationComponent />
          {/* testimonial component for homepage */}

          <div className="testimonial-component-for-main-screen">
            <TestimonialCarousel />
          </div>
        </div>{" "}
      </div>{" "}
      {/* Footer component */}
      <div className="importing-footer-component-for-main-screen">
        <FooterHolidays />
      </div>
    </>
  );
};

export default HomePageHolidays;
