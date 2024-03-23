import { FC, useEffect } from "react";
import { ParagraphProps } from "./type";
import { Checkbox, Form, Input } from "antd";

const { TextArea } = Input
const PropComponent: FC<ParagraphProps> = (props: ParagraphProps) => {
  const { title, isCenter, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, isCenter })
  }, [title, isCenter, form])

  const handleChange = () => {
    onChange && onChange(form.getFieldsValue())
  }

  return <Form layout="vertical" initialValues={{ title, isCenter }} disabled={disabled} onChange={handleChange} form={form}>
    <Form.Item label='段落内容' name="title" rules={[{ required: true }]}>
      <TextArea />
    </Form.Item>
    <Form.Item valuePropName="checked" name="isCenter">
      <Checkbox>居中显示</Checkbox>
    </Form.Item>
  </Form>
}

export default PropComponent