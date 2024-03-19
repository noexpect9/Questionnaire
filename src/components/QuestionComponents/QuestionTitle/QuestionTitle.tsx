import { FC } from 'react'
import { TitleProps, TitleDefaultProps, Level } from './type'
import { Typography } from 'antd'

const { Title } = Typography
const QuestionTitle: FC<TitleProps> = (props: TitleProps) => {
  const { text, level = 1, isCenter } = { ...TitleDefaultProps, ...props }
  // 根据level获取fontsize大小
  const fontSize = (level: Level) => {
    switch (level) {
      case 1:
        return '28px'
      case 2:
        return '24px'
      default:
        return '20px'
    }
  }
  return (
    <>
      <Title level={level} style={{ textAlign: isCenter ? 'center' : 'start', fontSize: fontSize(level) }} >
        {text}
      </Title >
    </>
  )
}


export default QuestionTitle