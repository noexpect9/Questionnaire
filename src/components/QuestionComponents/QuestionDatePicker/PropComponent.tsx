import { FC, useEffect } from "react";
import { DatePickerProps } from "./type";
import { DatePicker, Form } from "antd";

const PropComponent: FC<DatePickerProps> = (props: DatePickerProps) => {
  const { title, placeholder, onChange, disabled } = props
  console.log(props);
  
  const [form] = Form.useForm()

  const handleChange = () => {
    console.log(form.getFieldsValue());
    onChange && onChange(form.getFieldsValue())
  }

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder, form])
  return <>
    <Form layout="vertical" initialValues={{ title, placeholder }} disabled={disabled} form={form} onChange={handleChange}>
      <Form.Item label='日期选择' rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
    </Form>
  </>
}

export default PropComponent