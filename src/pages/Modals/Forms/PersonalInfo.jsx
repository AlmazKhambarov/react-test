/** @format */

import React from "react";
// import { F} from "react-router-dom";
import { Form, Col, Input, Space, Select } from "antd";
import "./Forms.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PersonalInfo = ({ setCurrentFormIndex }) => {
  const navigate = useNavigate();

  async function Post(data) {
    try {
      const response = await axios.post("api/", data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const onFinish = (values) => {
    setCurrentFormIndex((prevIndex) => Math.min(prevIndex + 1));
  };
  return (
    <div className='form'>
      <Form name='personalInfo' layout='vertical' onFinish={onFinish}>
        <Col xs={20} sm={20} md={12}>
          <Form.Item
            label='Никнейм'
            name='nikname'
            rules={[
              {
                required: true,
                max: 30,
                pattern: /^[a-zA-Z0-9]+$/,
                message:
                  "максимальная длина 30 символов, могут быть просто буквы и цифры",
              },
            ]}>
            <Input placeholder='Nikname' />
          </Form.Item>
        </Col>
        <Col xs={20} sm={20} md={12}>
          <Form.Item
            label='Имя'
            name='name'
            rules={[
              {
                required: true,
                max: 50,
                pattern: /^[a-zA-Z]+$/,
                message:
                  "Пожалуйста, введите корректное имя, длиной не более 50 символов. Разрешены только буквы.",
              },
            ]}>
            <Input placeholder='Имя' />
          </Form.Item>
        </Col>
        <Col xs={20} sm={20} md={12}>
          <Form.Item
            label='Фамилия'
            name='surname'
            rules={[
              {
                required: true,
                max: 50,
                pattern: /^[a-zA-Z]+$/,
                message:
                  "Пожалуйста, введите корректное Фамилия, длиной не более 50 символов. Разрешены только буквы.",
              },
            ]}>
            <Input placeholder='Фамилия' />
          </Form.Item>
        </Col>
        <Col xs={20} sm={20} md={12}>
          <Form.Item label='Пол' name='gender' rules={[{ required: true }]}>
            <Select
              defaultValue='мужской'
              style={{ width: "100%", height: "50px" }}
              options={[
                { value: "мужской", label: "мужской" },
                { value: "женский", label: "женский" },
              ]}
            />
          </Form.Item>
        </Col>
        <div className='buttons'>
          <button
            type='primary'
            htmlType='submit'
            className='btn_submit back'
            onClick={() => navigate("/")}>
            Назад
          </button>
          <button
            type='primary'
            htmlType='submit'
            className='btn_submit next'
            // onClick={handleNext}
          >
            Далее
          </button>
        </div>
      </Form>
    </div>
  );
};

export default PersonalInfo;
