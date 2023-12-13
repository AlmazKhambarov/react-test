/** @format */

import React, { useState } from "react";
import { Input, Col, Form } from "antd";
import Message from "./Modal/Message";
import axios from "axios";
const About = ({ setCurrentFormIndex, setVisible }) => {
  const [characterCount, setCharacterCount] = useState(0);
  const handleBack = () => {
    setCurrentFormIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleTextareaChange = (e) => {
    const text = e.target.value.replace(/\s/g, ""); // Remove spaces
    setCharacterCount(text.length);
  };

  async function Post(data) {
    try {
      const response = await axios.post("api/", data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const onFinish = (values) => {
    // Post(values);
    setVisible(true)
  };

  return (
    <>
      {/* <Message visible={visible}/> */}
      <div className='form'>
        <Form name='AboutInfo' layout='vertical' onFinish={onFinish}>
          <Col xs={14} sm={14} md={24}>
            <Form.Item
              label='О Себе'
              name='title'
              rules={[
                {
                  required: true,
                  max: 30,
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: "Заполните поля ввода",
                },
              ]}>
              <Input.TextArea
                onChange={handleTextareaChange}
                placeholder='О себе'
              />
            </Form.Item>
          </Col>
          <div className='buttons'>
            <button
              type='button'
              className='btn_submit back'
              onClick={handleBack}>
              Назад
            </button>
            <button
              type='submit'
              className='btn_submit next'
              // onClick={handleNext}
            >
              Отправить
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default About;
