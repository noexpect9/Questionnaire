import PropComponent from "./PropComponent";
import QuestionInput from "./QuestionInput";
import { InputDefaultProps } from "./type";

export * from './type'

// Input组件配置
const InputProps = {
  title: '一行输入框',
  type: 'input',
  Component: QuestionInput,
  PropComponent, // 组件属性
  defaultProps: InputDefaultProps
}
export default InputProps