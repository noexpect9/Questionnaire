import { FC } from "react";
import { DatePickerDefaultProps, DatePickerProps } from "./type";
import { DatePicker, Typography } from "antd";
const { Paragraph } = Typography

const QuestionDatePicker: FC<DatePickerProps> = (props: DatePickerProps) => {
  const { title, placeholder } = { ...DatePickerDefaultProps, ...props }
  return <>
    <Paragraph strong>{title}</Paragraph>
    <DatePicker placeholder={placeholder} title={title}></DatePicker>
  </>
};
export default QuestionDatePicker