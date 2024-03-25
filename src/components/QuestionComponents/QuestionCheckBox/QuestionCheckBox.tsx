import { FC } from "react";
import { Checkbox, Space, Typography } from "antd";
import { CheckBoxProps, CheckBoxDefaultProps } from './type'

const { Paragraph } = Typography
const QuestionCheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const { title, isVertical, list = [] } = { ...CheckBoxDefaultProps, ...props }
  return <>
    <Paragraph>{title}</Paragraph>
    <Space direction={isVertical ? 'vertical' : 'horizontal'}>
      {list.map((item, index) => {
        return <Checkbox key={index} checked={item.checked}>{item.text}</Checkbox>
      })}
    </Space >
  </>
}

export default QuestionCheckBox