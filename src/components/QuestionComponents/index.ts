import { FC } from 'react'
import QuestionInput, { InputProps } from './QuestionInput'
import QuestionTitle, { TitleProps } from './QuestionTitle'
import QuestionParagraph, { ParagraphProps } from './QuestionParagraph'
import QuestionDatePicker, { DatePickerProps } from './QuestionDatePicker'
import QuestionInfo, { InfoProps } from './QuestionInfo'
import QuestionRadio, { RadioProps } from './QuestionRadio'
import QuestionCheckBox, { CheckBoxProps } from './QuestionCheckBox'

// 获取所有组件类型
export type ComponentsPropsType = InputProps & TitleProps & ParagraphProps & DatePickerProps & InfoProps & RadioProps & CheckBoxProps

// component配置
export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<ComponentsPropsType>
  PropComponent: FC<ComponentsPropsType>
  defaultProps: ComponentsPropsType
}

// 组件配置
export const componentConfigData: ComponentConfigType[] = [
  QuestionInput, QuestionTitle, QuestionParagraph, QuestionDatePicker, QuestionInfo, QuestionRadio, QuestionCheckBox
]

// 组件类型分组
export const componentTypeGrounp = [
  {
    groupName: '文本显示',
    components: [QuestionInfo, QuestionTitle, QuestionParagraph]
  },
  {
    groupName: '用户输入',
    components: [QuestionInput, QuestionDatePicker]
  },
  {
    groupName: '用户选择',
    components: [QuestionRadio, QuestionCheckBox]
  }
]

// 通过type获取组件对应的配置
export default function getComponentConfig(type: string) {
  return componentConfigData.find(item => item.type === type)
}