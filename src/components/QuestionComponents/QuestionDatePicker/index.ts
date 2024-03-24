import QuestionDatePicker from "./QuestionDatePicker";
import PropComponent from "./PropComponent";
import { DatePickerDefaultProps } from "./type";

export * from './type'

// DatePicker组件配置
const DatePickerType = {
  title: 'DatePicker组件配置',
  type: 'datePicker',
  Component: QuestionDatePicker,
  PropComponent,
  defaultProps: DatePickerDefaultProps
}
export default DatePickerType