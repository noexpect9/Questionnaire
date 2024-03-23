import { FC } from "react";
import { ParagraphDefaultProps, ParagraphProps } from "./type";
import { Typography } from "antd";

const { Paragraph } = Typography
const QuestionParagraph: FC<ParagraphProps> = (props: ParagraphProps) => {
  const { title, isCenter } = { ...ParagraphDefaultProps, ...props }
  return <Paragraph style={{ textAlign: isCenter ? 'center' : 'start' }}>
    {title}
  </Paragraph>
}

export default QuestionParagraph