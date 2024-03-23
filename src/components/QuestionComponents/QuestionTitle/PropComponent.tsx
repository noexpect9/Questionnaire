import { FC, useEffect } from "react";
import { TitleProps } from "./type";
import { Checkbox, Form, Input, Select } from "antd";

const options = [
  { value: 1, text: 1 },
  { value: 2, text: 2 },
  { value: 3, text: 3 },
  { value: 4, text: 4 },
  { value: 5, text: 5 },
]

const PropComponent: FC<TitleProps> = (props: TitleProps) => {
  const { title, level, isCenter } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, level, isCenter })
  }, [title, level, isCenter, form])

  return <>
    <Form layout="vertical" initialValues={{ title, level, isCenter }} form={form}>
      <Form.Item label='标题内容' name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label='层级' name="level">
        <Select options={options} />
      </Form.Item>
      <Form.Item valuePropName="checked" name="isCenter">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  </>
}
export default PropComponent