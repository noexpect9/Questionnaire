import QuestionTitle from "./QuestionTitle";

import { TitleDefaultProps } from "./type";

export * from './type'

// Title组件配置
const TitleType = {
  title: '一行输入框',
  type: 'title',
  Component: QuestionTitle,
  defaultProps: TitleDefaultProps
}
export default TitleType