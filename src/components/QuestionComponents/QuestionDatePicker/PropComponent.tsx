import { FC, useEffect } from "react";
import { DatePickerProps } from "./type";
import { DatePicker, Form } from "antd";

const PropComponent: FC<DatePickerProps> = (props: DatePickerProps) => {
  const { title, placeholder, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder, form])

  return <>
    <Form layout="vertical" initialValues={{ title, placeholder }} disabled={disabled} form={form}>
      <Form.Item label='日期选择' rules={[{ required: true }]}>
        <DatePicker placeholder={placeholder} showTime style={{ width: '100%' }}></DatePicker>
      </Form.Item>
    </Form>
  </>
}

export default PropComponent