export interface OptionsType {
  text: string
  value: string
  checked: boolean
}

export interface CheckBoxProps {
  title?: string
  isVertical?: boolean
  list?: OptionsType[]
  onChange?: (value: CheckBoxProps) => void
  disabled?: boolean
}

export const CheckBoxDefaultProps: CheckBoxProps = {
  title: '多选题',
  list: [
    {
      text: '选项1',
      value: '1',
      checked: false,
    },
    {
      text: '选项2',
      value: '2',
      checked: false,
    },
  ],
}