import QuestionCheckBox from "./QuestionCheckBox";
import PropComponent from "./PropComponent";
import { CheckBoxDefaultProps } from "./type";

export * from './type'

const CheckBoxProps = {
  title: '多选题',
  type: 'checkBox',
  Component: QuestionCheckBox,
  PropComponent,
  defaultProps: CheckBoxDefaultProps
}

export default CheckBoxProps