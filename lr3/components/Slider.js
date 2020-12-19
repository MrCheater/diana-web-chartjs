import React from "react";

const Slider = ({ value, onChange, name, text }) => (
  <div>
    <input
      type="range"
      id={name}
      min="0.1"
      max="1"
      value={value}
      step="0.1"
      onChange={onChange}
    />
    <label htmlFor={name}>{text}</label>
  </div>
);

export default Slider;
