import React, { FC } from "react";
import styles from './QuestionCard.module.scss'
type PropsType = {
  _id: number
  title: string
  isStar: boolean
  isPubliced: boolean
  answerCount: number
  createTime: string
}
const QuestionCard: FC<PropsType> = (props) => {
  const { title, isPubliced, answerCount, createTime } = props
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.left}>
            <a href="#">{title}</a>
          </div>
          <div className={styles.right}>
            {isPubliced ? <span>已发布</span> : <span>未发布</span>}
            <span>答卷: {answerCount}</span>
            <span>{createTime}</span>
          </div>
        </div>
        <div className={styles['action_container']}>
          <div className={styles.left}>
            <button>编辑问卷</button>
            <button>统计</button>
          </div>
          <div className={styles.right}>
            <button>标星</button>
            <button>复制</button>
            <button>删除</button>
          </div>
        </div>
      </div >
    </>
  )
}


export default QuestionCard