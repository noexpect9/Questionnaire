import { FC } from "react";
import { InfoProps, InfoDefaultProps } from "./type";
import { Typography } from "antd";

const { Title, Paragraph } = Typography
const QuestionInfo: FC<InfoProps> = (props: InfoProps) => {
  const { title = '', desc = '' } = { ...InfoDefaultProps, ...props }

  const descList = desc.split('\n')
  const t = descList.map((item, index) => {
    return <span>{index > 0 && <br />}{item}</span>
  })
  return (
    <div style={{ textAlign: 'center' }}>
      <Title>{title}</Title>
      <Paragraph>{t}</Paragraph>
    </div>
  )
}

export default QuestionInfo