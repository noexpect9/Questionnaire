import React, { FC, useState } from "react";
import QuestionCard from '../../../components/QuestionCard'
import styles from './Common.module.scss'
import { useTitle } from "ahooks";
import { Typography } from 'antd'

const rawQuestionList = [
  {
    _id: 1,
    title: "title1",
    isPubliced: true,
    isStar: false,
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
    isStar: false,
    answerCount: 2,
    createTime: '2022-12-12 12:12:12'
  }
]
const { Title } = Typography
const List: FC = (props) => {
  useTitle('问卷列表 - 小慕问卷')
  const [questionList] = useState(rawQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>我的问卷</div>
        <div className={styles.right}>搜索</div>
      </div>
      <div>
        <Title level={3}>问卷列表</Title>
        {questionList.length > 0 && questionList.map(question => {
          const { _id } = question
          return <QuestionCard key={_id} {...question} />
        })}
      </div>
    </>
  );
}

export default List