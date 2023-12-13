/** @format */

import React from "react";
import "./ProgressBar.scss";
const ProgressBar = ({ progress }) => {
  // const progress = 50;
  // qogan logikani yani galochkani if else qilib qoysez bo'ladi yani 50 ga teng bosa birinchi dotni ichiga galochkani qoysez bo'ladi.
  //progressni state orqali propsdan jonatsez bo'ladi
  // progress compoenent ni form container dan tashqariga qoying bomasa withd 100% qilomisiz.
  return (
    <div className='progress'>
      <div className='dot active'></div>
      <div className={`dot ${progress >= 50 && "active"}`}></div>
      <div className={`dot ${progress == 100 && "active"}`}></div>
      <div className='prog' style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
