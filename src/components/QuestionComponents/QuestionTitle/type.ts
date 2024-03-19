
export type Level = 1 | 2 | 3 | 4 | 5

export interface TitleProps {
  text?: string
  level?: Level;
  isCenter?: boolean
}

export const TitleDefaultProps: TitleProps = {
  text: '一行标题',
  level: 1,
  isCenter: false
}