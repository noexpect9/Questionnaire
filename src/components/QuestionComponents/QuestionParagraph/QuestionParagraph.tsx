import { FC } from "react";
import { ParagraphDefaultProps, ParagraphProps } from "./type";
import { Typography } from "antd";

const { Paragraph } = Typography
const QuestionParagraph: FC<ParagraphProps> = (props: ParagraphProps) => {
  const { title = '', isCenter } = { ...ParagraphDefaultProps, ...props }
  // 段落换行 这种会导致渲染html
  // const t = title.replaceAll('\n', '<br>')

  const textList = title.split('\n')
  const t = textList.map((item, index) => {
    return <span key={index}>{index > 0 && <br />}{item}</span>
  })

  return <Paragraph style={{ textAlign: isCenter ? 'center' : 'start' }}>
    {t}
  </Paragraph>
}

export default QuestionParagraph