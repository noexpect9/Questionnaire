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
export const componentConfigData: ComponentConfigType[] = [
  QuestionInput, QuestionTitle
]

// 组件类型分组
export const componentTypeGrounp = [
  {
    groupName: '文本显示',
    components: [QuestionTitle]
  },
  {
    groupName: '用户输入',
    components: [QuestionInput]
  }
]

// 通过type获取组件对应的配置
export default function getComponentConfig(type: string) {
  return componentConfigData.find(item => item.type === type)
}