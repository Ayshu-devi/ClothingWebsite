import React from 'react';

const About = () => {
  return (
    <div className="about-container flex flex-col items-center py-8 px-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-black">About Us</h1>
      
      <div className="about-content flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="about-image md:w-1/2 md:pr-8">
          <img
            src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="about-text md:w-1/2 mt-6 md:mt-0">
          <p className="text-lg mb-6">
            Welcome to Fabelley! We are a passionate team dedicated to bringing you the latest trends in fashion and apparel. Our goal is to offer high-quality clothing that combines style, comfort, and affordability.
          </p>
          <p className="text-lg mb-6">
            At Fabelley, we believe that fashion should be accessible to everyone. Our collection features a wide range of clothing options, from casual wear to formal attire, all designed with the modern individual in mind.
          </p>
          <p className="text-lg mb-6">
            Our team is committed to providing exceptional customer service and ensuring that your shopping experience is as seamless as possible. Thank you for choosing Fabelley, and we look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
