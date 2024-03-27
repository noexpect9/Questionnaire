import React, { FC } from "react";
import useQuestionDetail from "../../../hooks/useQuestionDetail";
import { Button, Result, Spin } from "antd";
import usePageInfo from "../../../hooks/usePageInfo";
import { useNavigate } from "react-router-dom";
import { useTitle } from "ahooks";
import styles from './index.module.scss'
import StatHeader from "./StatHeader";

const Stat: FC = () => {
  const { loading } = useQuestionDetail()
  const nav = useNavigate()
  const { title, isPubliced } = usePageInfo()
  useTitle(`问卷统计-${title}`)

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
            <div className={styles.left}>Left</div>
            <div className={styles.main}>Main</div>
            <div className={styles.right}>RIght</div>
          </div>}
        </div>
      </div>
    </>
  )
}

export default Stat