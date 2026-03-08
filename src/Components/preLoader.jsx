import React from 'react';

import loader from "../Assets/Images/preloader.gif";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Preloader;