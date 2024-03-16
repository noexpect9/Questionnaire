import React, { FC } from "react";
import QuestionCard from '../../../components/QuestionCard'
import styles from './Common.module.scss'
import { useTitle } from "ahooks";
import { Spin, Typography } from 'antd'
import ListSearch from "../../../components/ListSearch";
import { QuestionItem, } from "../../../api";
import useQuestionList from "../../../hooks/useQuestionList";

const { Title } = Typography
const List: FC = (props) => {
  useTitle('问卷列表 - 小慕问卷')
  const { data: result = {} as any, loading } = useQuestionList({})
  const { items: questionList = [] } = result
  return (
    <>
      <div className={styles.header}>
        <ListSearch />
      </div>
      <div>
        <Spin spinning={loading} fullscreen tip="Loading" />
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