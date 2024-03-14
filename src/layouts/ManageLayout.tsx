import React, { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from './ManageLayout.module.scss'
import { Button, Flex, Divider, message } from "antd";
import { BarsOutlined, DeleteOutlined, PlusOutlined, StarOutlined } from "@ant-design/icons";
import { createQuestion } from "../api";

const ManageLayout: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  function matchTab(path: string) {
    return pathname.startsWith(path) ? 'default' : 'text'
  }
  async function handleCreate() {
    const { data } = await createQuestion()
    if (data.id) nav(`/question/edit/${data.id}`)
    message.success('创建成功!')
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Flex gap="small" wrap="wrap">
          <Button type="primary" size="large" icon={<PlusOutlined />} onClick={handleCreate}>创建问卷</Button>
          <Divider />
          <Button type={matchTab('/manage/list')} size="large" icon={<BarsOutlined />} onClick={() => nav('/manage/list')}>我的问卷</Button>
          <Button type={matchTab('/manage/star')} size="large" icon={<StarOutlined />} onClick={() => nav('/manage/star')}>星标问卷</Button>
          <Button type={matchTab('/manage/trash')}
            size="large"
            icon={<DeleteOutlined style={{ color: 'red' }} />}
            onClick={() => nav('/manage/trash')}>回收站</Button>
        </Flex>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout