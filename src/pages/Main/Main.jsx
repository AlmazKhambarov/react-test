/** @format */

import React from "react";
import "./Main.scss";
import { FolderIcon } from "../../assets/icons";
import { Form, Button, Input, Col } from "antd";
import PhoneNumberInput from "../../components/Forms/PhoneNumberInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import PhoneNumberInput from "./PhoneNumberInput";
const Main = () => {

    async function Post(data) {
        try {
          const response = await axios.post('api/', data);
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      
      const onFinish = (values) => {
        Post(values);
        navigate('/form');
      };

  const navigate = useNavigate();
  return (
    <div className='main'>
      <div className='header'>
        <div className='profile'>АИ</div>
        <div>
          <h2>Алексей Иванов</h2>
          <div className='social'>
            <span>
              {FolderIcon}
              <a href='#'>Telegram</a>
            </span>
            <span>
              {FolderIcon}
              <a href='#'>GitHub</a>
            </span>
            <span>
              {FolderIcon}
              <a href='#'>Резюме</a>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Form name='changePasswordForm' layout='vertical' onFinish={onFinish}>
          <Col xs={24} sm={24} md={10}>
            <PhoneNumberInput
              label='Номер телефона'
              name='phoneNumber'
              required
            />
          </Col>
          <Col xs={14} sm={14} md={10}>
            <Form.Item label='Email' name='email'>
              <Input
                placeholder='webstudio.fractal@example.com'
                type='email'
                required
              />
            </Form.Item>
          </Col>
          <button type='primary' htmlType='submit' className='btn_submit'>
            Начать
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Main;
