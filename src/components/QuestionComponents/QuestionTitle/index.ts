import PropComponent from "./PropComponent";
import QuestionTitle from "./QuestionTitle";

import { TitleDefaultProps } from "./type";

export * from './type'

// Title组件配置
const TitleType = {
  title: 'Title组件配置',
  type: 'title',
  Component: QuestionTitle,
  PropComponent,
  defaultProps: TitleDefaultProps
}
export default TitleType