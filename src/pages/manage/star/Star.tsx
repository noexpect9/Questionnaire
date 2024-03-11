import React, { FC, useState } from "react";
import { Typography } from 'antd'
import styles from '../list/Common.module.scss'
import QuestionCard from "../../../components/QuestionCard";

const rawQuestionList = [
  {
    _id: 1,
    title: "title1",
    isPubliced: true,
    isStar: true,
    answerCount: 5,
    createTime: '2022-12-12 12:12:12'
  },
  {
    _id: 2,
    title: "title2",
    isPubliced: false,
    isStar: true,
    answerCount: 6,
    createTime: '2022-12-10 12:12:12'
  },
  {
    _id: 3,
    title: "title3",
    isPubliced: true,
    isStar: true,
    answerCount: 2,
    createTime: '2022-12-12 12:12:12'
  }
]
const { Title } = Typography
const Star: FC = () => {
  const [questionList] = useState(rawQuestionList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>我的问卷</div>
        <div className={styles.right}>搜索</div>
      </div>
      <div>
        <Title level={3}>星标问卷</Title>
        {questionList.length > 0 && questionList.map(question => {
          const { _id } = question
          return <QuestionCard key={_id} {...question} />
        })}
      </div>
    </>
  )
}

export default Star