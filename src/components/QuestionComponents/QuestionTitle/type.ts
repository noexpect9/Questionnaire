
export type Level = 1 | 2 | 3 | 4 | 5

export interface TitleProps {
  title?: string
  level?: Level;
  isCenter?: boolean
  onChange?: (value: TitleProps) => void
}

export const TitleDefaultProps: TitleProps = {
  title: '一行标题',
  level: 1,
  isCenter: false
}