import { FC } from 'react'
import { InputProps } from './type'
import { Typography, Input } from 'antd'

const { Paragraph } = Typography
const QuestionInput: FC<InputProps> = (props: InputProps) => {
  
  const { title, placeholder } = props
  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </>
  )
}

export default QuestionInput