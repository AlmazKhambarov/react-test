/** @format */

import React, { useEffect, useState } from "react";
import PersonalInfo from "./Forms/PersonalInfo";
import Advantages from "./Forms/Advantages";
import About from "./Forms/About";
import Cookies from "js-cookie";
import "./index.scss";
import ProgressBar from "./Forms/ProgressBar/ProgressBar";
import Message from "./Forms/Modal/Message";
const Index = () => {
  const forms = [PersonalInfo, Advantages, About];
  const initialFormIndex = Number(Cookies.get("currentFormIndex")) || 0;
  const [visible, setVisible] = useState(false);
  const [currentFormIndex, setCurrentFormIndex] = useState(initialFormIndex);
  const [progress, setProgress] = useState(
    (currentFormIndex / (forms.length - 1)) * 100
  );

  useEffect(() => {
    Cookies.set("currentFormIndex", String(currentFormIndex));
    setProgress((currentFormIndex / (forms.length - 1)) * 100);
  }, [currentFormIndex]);

  console.log(currentFormIndex);
  return (
    <>
      <ProgressBar progress={progress} />
      <Message visible={visible}  status={true}/>
      <div className='forms'>
        {forms.map((Form, index) => (
          <div
            key={index}
            className={`form ${
              index === currentFormIndex ? Form.name + " active" : ""
            }`}
            style={{
              opacity: index === currentFormIndex ? 1 : 0,
              visibility: index === currentFormIndex ? "visible" : "hidden",
              transition: "transform 0.5s, opacity 0.7s, visibility 0.5s",
              transform: `translateX(${(index - currentFormIndex) * 100}%)`,
            }}>
            <Form
              setCurrentFormIndex={setCurrentFormIndex}
              setVisible={setVisible}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
