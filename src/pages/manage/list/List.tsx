import React, { FC, useEffect, useState } from "react";
import QuestionCard from '../../../components/QuestionCard'
import styles from './Common.module.scss'
import { useTitle } from "ahooks";
import { Typography } from 'antd'
import ListSearch from "../../../components/ListSearch";
import { QuestionItem, getHistoryList, Result } from "../../../api";

const { Title } = Typography
const List: FC = (props) => {
  useTitle('问卷列表 - 小慕问卷')

  const [questionList, setQuestionList] = useState<QuestionItem[]>([])
  useEffect(() => {
    getHistoryList().then((res: Result) => {
      const { data } = res
      setQuestionList(data.items)
    })
  }, [])
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>我的问卷</div>
        <ListSearch />
      </div>
      <div>
        <Title level={3}>问卷列表</Title>
        {questionList.length > 0 && questionList.map((question: QuestionItem) => {
          const { _id } = question
          return <QuestionCard key={_id} {...question} />
        })}
      </div>
    </>
  );
}

export default List