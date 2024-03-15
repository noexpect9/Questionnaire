import React, { FC } from "react";
import { Spin, Typography } from 'antd'
import styles from '../list/Common.module.scss'
import QuestionCard from "../../../components/QuestionCard";
import ListSearch from "../../../components/ListSearch";
import useQuestionList from "../../../hooks/useQuestionList";
import { QuestionItem } from "../../../api";

const { Title } = Typography
const Star: FC = () => {
  const { data: result = {} as any, loading } = useQuestionList({ isStar: true })
  const { items: questionList = [] } = result
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>我的问卷</div>
        <div>
          <ListSearch />
        </div>
      </div>
      <div>
        <Spin spinning={loading} fullscreen tip="Loading" />
        <Title level={3}>星标问卷</Title>
        {questionList.length > 0 && questionList.map((question: QuestionItem) => {
          if (question.isStar) {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          }
          return null
        })}
      </div>
    </>
  )
}

export default Star