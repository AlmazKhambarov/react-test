/** @format */

import React from "react";
import { Form, Input } from "antd";
import InputMask from "react-input-mask";

const PhoneNumberInput = ({ label, name, required }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: "Please enter a valid phone number",
        },
      ]}>
      <InputMask mask='+7(999) 999-99-99' maskChar='_'>
        {() => (
          <Input
            placeholder='+7 999 999-99-99'
            style={{ width: "100%" }} // Adjust the width as needed
          />
        )}
      </InputMask>
    </Form.Item>
  );
};
export default PhoneNumberInput;