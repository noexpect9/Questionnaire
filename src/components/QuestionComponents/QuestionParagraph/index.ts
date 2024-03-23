import QuestionParagraph from "./QuestionParagraph";
import PropComponent from "./PropComponent";
import { ParagraphDefaultProps } from "./type";

export * from './type'

// Paragraph组件配置
const ParagraphType = {
  title: '段落组件配置',
  type: 'paragraph',
  Component: QuestionParagraph,
  PropComponent,
  defaultProps: ParagraphDefaultProps
}
export default ParagraphType