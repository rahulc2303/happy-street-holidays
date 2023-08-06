import React, { useState } from "react";
import "./ContactPageHolidays.css"
import NavBarHolidays from "../../Components/NavBarHolidays/NavBarHolidays";

const ContactPageHolidays = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      message,
      name,
      email,
      subject,
    };



    // Replace with your API endpoint for sending emails
    const response = await fetch('http://localhost:3001/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setShowPopup(true);
    }
  };

  return <>
    <div className="main-navbar-for-the-happy-street-holidays">
      <NavBarHolidays />
    </div>

    <div className="h-[480px] w-full relative about-us-banner">
      {/* <img src="https://preview.colorlib.com/theme/travelo/img/banner/bradcam3.png.webp" alt="" className="w-full h-[480px] bg-cover bg-no-repeat" /> */}
      <div className="absolute bottom-1/2 text-center w-full">
        <h1 className="font-on-banner-about align-middle"> About Us </h1>
        <p className="text-white">
          Pixel perfect design with awesome contents
        </p>
      </div>
    </div>
    <div className="flex justify-center my-16">


      <div className="w-10/12">
        <div className="">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.4282157743364!2d74.2076958!3d19.5661468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd01b680ea4ce3%3A0xcb4eac8c0ed886a8!2sHAPPY%20STREET%20HOLIDAYS!5e0!3m2!1sen!2sin!4v1691253308662!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </div>

    <div>



      <div className="contact-form-container">
        <h2 className="form-heading">Get in Touch</h2>
        <form className="form" >
          <label className="form-label" htmlFor="message"></label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
            className="form-textarea" placeholder="Enter message"
          ></textarea>
          <div className="flex gap-5">
            <div className="">

              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input" placeholder="Your Name"
              />
            </div>
            <div className="">

              <label className="form-label-email" htmlFor="email"></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input" placeholder="Your Email"
              />
            </div>
          </div>

          <label className="form-label" htmlFor="subject"></label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="form-input" placeholder="Subject"
          />

          <button type="submit" className="form-button" onClick={handleSubmit}>Send</button>
        </form>

        {showPopup && (
          <div className="popup">
            <p>Thank you for your submission!</p>
            <button onClick={() => setShowPopup(false)} className="popup-button">Close</button>
          </div>
        )}
      </div>




    </div>


  </>;
};

export default ContactPageHolidays;
