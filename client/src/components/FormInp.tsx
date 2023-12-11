import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { FormProps } from "../utils/types";
// import { useFormattedInput } from "../hooks/useFormattedNumber";
import { emailRegEx } from "../utils/constants";

type FieldType = {
  email: string;
  number?: string;
};

const FormInp: React.FC<FormProps> = ({
  number,
  numberChange,
  email,
  setEmail,
  submitForm,
}) => {
  useEffect(() => {
    console.log("number: ", number);
  }, [number]);

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    numberChange(e);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 26 }}
      style={{ maxWidth: 650 }}
      onFinish={() => submitForm()}
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          {
            pattern: new RegExp(emailRegEx),
            message: "Please input valid email!",
          },
          { required: true, message: "Please input your email!" },
        ]}
      >
        <Input value={email} onChange={handleChangeEmail} />
      </Form.Item>

      <Form.Item<FieldType> label="Number">
        <Input value={number} onChange={handleChangeNumber} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button className="btn" type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormInp;
