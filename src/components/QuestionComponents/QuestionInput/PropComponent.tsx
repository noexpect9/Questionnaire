import { FC, useEffect } from "react";
import { InputProps } from "./type";
import { Form, Input } from "antd";

const PropComponent: FC<InputProps> = (props: InputProps) => {
  const { title, placeholder } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder, form])
  
  return <>
    <Form layout="vertical" initialValues={{ title, placeholder }} form={form}>
      <Form.Item label={title} name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={placeholder} name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  </>
}
export default PropComponent