import React, { FC } from "react";
import { Space, Typography, Button, Form, type FormProps, Input, message } from 'antd'
import { UserAddOutlined } from "@ant-design/icons";
import styles from './Register.module.scss'
import { LOGIN_PATH } from "../router";
import { Link, useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import { register } from "../api/user";

type FieldType = {
  username?: string;
  password?: string;
  repassword?: string;
  nickname?: string;
};

const { Title } = Typography
const Register: FC = () => {
  const nav = useNavigate()
  const { run } = useRequest(async (formData) => {
    const { username, password, nickname } = formData
    await register({
      username,
      password,
      nickname
    })
  }, {
    manual: true,
    onSuccess: () => {
      message.success('注册成功')
      nav(LOGIN_PATH)
    }
  })

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    run(values)
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}><UserAddOutlined /></Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 18 }}
          style={{ maxWidth: 1200 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item<FieldType>
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType>
            label="确认密码"
            name="repassword"
            rules={[{ required: true, message: '请输入密码' }, ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error('两次密码不一致'));
                }
              }
            })]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType>
            label="昵称"
            name="nickname"
            rules={[{ required: true, message: '请输入昵称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 20 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to={LOGIN_PATH}>已有账号, 登陆</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register