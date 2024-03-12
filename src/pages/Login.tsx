import React, { FC, useEffect } from "react";
import styles from './Login.module.scss'
import { Space, Typography, Button, Form, type FormProps, Input, Checkbox } from 'antd'
import { UserAddOutlined } from "@ant-design/icons";
import { REGISTER_PATH } from "../router";
import { Link } from "react-router-dom";
import { local } from "../utils/storage";

type LoginType = {
  username: string
  password: string
  remember?: boolean
}
const { Title } = Typography
const USERNAME_STORAGE_KEY = 'username'
const PASSWORD_STORAGE_KEY = 'password'

const Login: FC = () => {
  const [form] = Form.useForm()
  useEffect(() => {
    const username = local.get(USERNAME_STORAGE_KEY)
    const password = local.get(PASSWORD_STORAGE_KEY)
    if (username && password) {
      form.setFieldsValue({
        username,
        password
      })
    }
  })
  const onFinish: FormProps<LoginType>["onFinish"] = (values) => {
    const { username, password, remember } = values
    if (remember) {
      local.set(USERNAME_STORAGE_KEY, username)
      local.set(PASSWORD_STORAGE_KEY, password)
    } else {
      local.remove(USERNAME_STORAGE_KEY)
      local.remove(PASSWORD_STORAGE_KEY)
    }
  }
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}><UserAddOutlined /></Title>
          <Title level={2}>登陆</Title>
        </Space>
      </div>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          initialValues={{ remember: true }}
          form={form}
        >
          <Form.Item<LoginType>
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<LoginType>
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<LoginType> name='remember' valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">登陆</Button>
              <Link to={REGISTER_PATH}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login