export interface OptionsType {
  text: string
  value: string
}

export interface RadioProps {
  title?: string
  isVertical?: boolean
  options?: OptionsType[]
  value?: string
  onChange?: (value: RadioProps) => void
  disabled?: boolean
}

export const RadioDefaultProps: RadioProps = {
  title: '单选题',
  value: '',
  options: [
    {
      text: '选项1',
      value: '1',
    },
    {
      text: '选项2',
      value: '2',
    },
  ],
}