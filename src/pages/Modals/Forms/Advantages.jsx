/** @format */

import { Checkbox, Col, Form, Input, Radio } from "antd";
import React, { useState } from "react";
import addIcon from "../../../assets/icons/addIcon.svg";
import deleteIcon from "../../../assets/icons/deleteIcon.svg";
import "./Forms.scss";
import axios from "axios";
const Advantages = ({ setCurrentFormIndex }) => {
  const [inputs, setInputs] = useState([{ id: 1, type: "text", value: "" }]);

  const options = [
    { id: 1, value: "1", label: "1" },
    { id: 2, value: "2", label: "2" },
    { id: 3, value: "3", label: "3" },
  ];
  const handleInputChange = (id, value) => {
    const newInputs = inputs.map((input) =>
      input.id === id ? { ...input, value } : input
    );
    setInputs(newInputs);
  };

  const handleBack = () => {
    setCurrentFormIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    // scrollToTop();
  };
  const handleAddInput = () => {
    const newInput = { id: inputs.length + 1, type: "text", value: "" };
    setInputs([...inputs, newInput]);
  };
  const deleteInput = (id) => {
    const updatedInputs = inputs.filter((input) => input.id !== id);
    setInputs(updatedInputs);
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
    Post(values);
    setCurrentFormIndex((prevIndex) => Math.min(prevIndex + 1));
  };

  console.log(inputs);
  return (
    <div className='form'>
      <Form name='Advantages' layout='vertical' onFinish={onFinish}>
        <Col xs={14} sm={14} md={12}>
          <p>Преимущества</p>
          {inputs.map((inp) => (
            <Form.Item
              name={`nikname_${inp.id}`}
              rules={[
                { required: true, message: "Пожалуйста заполните поля" },
              ]}>
              <div className='input__group'>
                <Input
                  placeholder='Nikname'
                  value={inp.value}
                  onChange={(e) => handleInputChange(inp.id, e.target.value)}
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={deleteIcon}
                  alt=''
                  onClick={() => deleteInput(inp.id)}
                />
              </div>
            </Form.Item>
          ))}
          <span className='addIcon' onClick={handleAddInput}>
            <img src={addIcon} alt='' />
          </span>
        </Col>
        <div className='chechbox_group'>
          <p>Checkbox Группа</p>
          <Checkbox.Group options={options}></Checkbox.Group>
        </div>
        <div className='radio_group'>
          <p>Radio Группа</p>
          <Radio.Group options={options}></Radio.Group>
        </div>
        <div className='buttons'>
          <button
            type='button'
            className='btn_submit back'
            onClick={handleBack}>
            Назад
          </button>
          <button type='submit' className='btn_submit next'>
            Далее
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Advantages;
