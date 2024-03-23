export interface ParagraphProps {
  title?: string
  isCenter?: boolean
  onChange?: (value: ParagraphProps) => void
  disabled?: boolean
}

export const ParagraphDefaultProps: ParagraphProps = {
  title: '段落',
  isCenter: false
}