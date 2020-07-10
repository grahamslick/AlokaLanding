import React from 'react';
const sliderDes = (props) => {
  return (
    <>
      <div className="testimonialDetails">
        <p className="testimonialName">{props.data.name}</p>
        <p className="testimonialDes">{props.data.description}</p>
        <span className="testimonialDesignation">{props.data.designation}</span>
      </div>
    </>
  );
};

export default sliderDes;
