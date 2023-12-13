/** @format */

import React, { useState } from "react";
import successIcon from "../../../../assets/icons/successIcon.svg";
import "./Message.scss";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Message = ({ visible }) => {
  const navigate = useNavigate();
  const onFinish = () => {
    Cookies.remove("currentFormIndex");
    navigate("/");
  };
  return (
    <>
      <div className={`message ${visible ? "activeMessage" : "nonActive"}`}>
        <h2>Форма успешно отправлена</h2>
        <span>
          <img src={successIcon} />
        </span>
        <button onClick={onFinish}>На главную</button>
      </div>
      <div className={visible ? "w-screen" : null}></div>
    </>
  );
};

export default Message;
