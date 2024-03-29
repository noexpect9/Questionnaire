export interface InputProps {
  title?: string
  placeholder?: string
  onChange?: (value: InputProps) => void
  disabled?: boolean
}

export const InputDefaultProps: InputProps = {
  title: '一行输入框',
  placeholder: '请输入内容',
}