export interface InfoProps {
  title?: string
  desc?: string
  onChange?: (value: InfoProps) => void
  disabled?: boolean
}

export const InfoDefaultProps: InfoProps = {
  title: '一行信息',
  desc: '描述信息',
}