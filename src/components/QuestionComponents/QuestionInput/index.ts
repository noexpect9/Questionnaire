import QuestionInput from "./QuestionInput";
import { InputDefaultProps } from "./type";

export * from './type'

const InputProps = {
  title: '一行输入框',
  type: 'input',
  Component: QuestionInput,
  defaultProps: InputDefaultProps
}
export default InputProps