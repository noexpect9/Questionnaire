import React, { FC, useEffect } from "react";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { MANAGE_LIST_PATH } from "../router";
import styles from './Home.module.scss'
import { getHistoryList } from "../api";

const { Title, Paragraph } = Typography
const Home: FC = () => {

  const nav = useNavigate()
  useEffect(() => {
    getHistoryList().then(res => {
      console.log(res)
    })
  })
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建问卷100份, 发布问卷90份, 收到问卷960份</Paragraph>
        <div>
          <Button type="primary" size="large" onClick={() => nav(MANAGE_LIST_PATH)}>开始使用</Button>
        </div>
      </div>
    </div>
  )
}

export default Home