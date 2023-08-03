import React from "react";
import img1 from "../../Assets/Img/Popular destinations/img1.png";
import "./PopularDestinationCard.css";

const PopularDestinationCard = () => {
  return (
    <>
      {/* This is the card component for the popular destination section in home screen page */}

      <div className="flex-card-component-for-the-destinations">
        {/* specific width for the component */}

        <div className="specific-width-for-the-destination-component ">
          {/* img for the component */}
          <img
            className="image-for-the-popular-destinations "
            src={img1}
            alt=""
            srcset=""
          />
          <div className="place-name-and-counting-of-places-for-the-component">
            {/* state name for the component */}
            <p className="place-name-of-the-state">Italy</p>
            {/* How many places in the state */}
            <p className="how-many-places-in-the-given-state">07 Places</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDestinationCard;
