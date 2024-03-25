import { FC, useEffect } from "react";
import { InfoProps } from "./type";
import { Form, Input } from "antd";

const { TextArea } = Input

const PropComponent: FC<InfoProps> = (props: InfoProps) => {
  const { title, desc, onChange, disabled } = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({ title, desc })
  })

  const handleChange = () => {
    onChange && onChange(form.getFieldsValue())
  }
  return (
    <div>
      <Form layout="vertical" initialValues={{ title, desc }} disabled={disabled} onChange={handleChange} form={form}>
        <Form.Item label='标题' name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='描述' name="desc">
          <TextArea />
        </Form.Item>
      </Form>
    </div>
  )
}

export default PropComponent