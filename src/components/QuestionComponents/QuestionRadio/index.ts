import QuestionRadio from "./QuestionRadio";
import PropComponent from "./PropComponent";
import { RadioDefaultProps } from "./type";

export * from './type'

// Radio组件配置
const RadioType = {
  title: 'Radio组件配置',
  type: 'radio',
  Component: QuestionRadio,
  PropComponent,
  defaultProps: RadioDefaultProps
}
export default RadioType