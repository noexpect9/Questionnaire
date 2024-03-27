import React, { FC, useState } from "react";
import useQuestionDetail from "../../../hooks/useQuestionDetail";
import { Button, Result, Spin } from "antd";
import usePageInfo from "../../../hooks/usePageInfo";
import { useNavigate } from "react-router-dom";
import { useTitle } from "ahooks";
import styles from './index.module.scss'
import StatHeader from "./StatHeader";
import ComponentLib from "./ComponentLib";
import QuestionResult from "./QuestionResult";
import Charts from "./Charts";

const Stat: FC = () => {
  const { loading } = useQuestionDetail()
  const nav = useNavigate()
  const { title, isPubliced } = usePageInfo()
  useTitle(`问卷统计-${title}`)
  // 全局控制选中的组件
  const [selectComponentId, setSelectComponentId] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectComponentType, setSelectComponentType] = useState('')

  const result = () => {
    if (isPubliced) return
    else return <Result status="403" title="问卷未发布" subTitle="请先发布问卷" extra={<Button type="primary" onClick={() => nav(-1)}>去发布</Button>} />
  }

  return (
    <>
      {loading && <Spin fullscreen />}
      {result()}
      <div className={styles.contanier}>
        <StatHeader />
        <div className={styles.content}>
          {!loading && <div className={styles['content-wrapper']}>
            <div className={styles.left}>
              <ComponentLib selectComponentId={selectComponentId} setSelectComponentId={setSelectComponentId} setSelectComponentType={setSelectComponentType} />
            </div>
            <div className={styles.main}>
              <QuestionResult />
            </div>
            <div className={styles.right}>
              <Charts />
            </div>
          </div>}
        </div>
      </div>
    </>
  )
}

export default Stat