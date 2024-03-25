import { FC } from "react";
import { Radio, Space, Typography } from "antd";
import { RadioDefaultProps, RadioProps } from "./type";

const { Paragraph } = Typography
const QuestionRadio: FC<RadioProps> = (props: RadioProps) => {
  const { title, isVertical, value, options = [] } = { ...RadioDefaultProps, ...props }

  return <>
    <Paragraph>{title}</Paragraph>
    <Radio.Group value={value}>
      <Space direction={isVertical ? 'vertical' : 'horizontal'}>
        {options.map((item, index) => {
          return <Radio key={index} value={item.value}>{item.text}</Radio>
        })}
      </Space>
    </Radio.Group>
  </>
};

export default QuestionRadio