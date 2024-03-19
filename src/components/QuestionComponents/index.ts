import { FC } from 'react'
import QuestionInput, { InputProps } from './QuestionInput'
import QuestionTitle, { TitleProps } from './QuestionTitle'


export type ComponentsPropsType = InputProps & TitleProps

// component配置
export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<ComponentsPropsType>
  defaultProps: ComponentsPropsType
}

// 组件配置
export const ComponentConfig: ComponentConfigType[] = [
  QuestionInput, QuestionTitle
]

export default function getComponentConfig(type: string) {
  return ComponentConfig.find(item => item.type === type)
}