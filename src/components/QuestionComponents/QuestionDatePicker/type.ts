export interface DatePickerProps {
  title?: string
  placeholder?: string
  onChange?: (value: DatePickerProps) => void
  disabled?: boolean
}

export const DatePickerDefaultProps: DatePickerProps = {
  title: '日期选择',
  placeholder: '请选择日期',
}