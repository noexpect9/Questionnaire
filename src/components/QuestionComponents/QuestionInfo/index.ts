import QuestionInfo from "./QuestionInfo";
import PropComponent from "./PropComponent";
import { InfoDefaultProps } from "./type";

export * from './type'

// Info组件配置
const InfoType = {
  title: 'Info组件配置',
  type: 'info',
  Component: QuestionInfo,
  PropComponent,
  defaultProps: InfoDefaultProps
}
export default InfoType