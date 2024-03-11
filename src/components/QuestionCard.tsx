import React, { FC } from "react";
import styles from './QuestionCard.module.scss'
import { Button, Flex, Divider, Space, Tag, Popconfirm, message } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, CopyOutlined, DeleteOutlined, EditOutlined, LineChartOutlined, StarOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

type PropsType = {
  _id: number
  title: string
  isStar: boolean
  isPubliced: boolean
  answerCount: number
  createTime: string
}
const QuestionCard: FC<PropsType> = (props) => {
  const { _id, title, isPubliced, isStar, answerCount, createTime } = props
  const nav = useNavigate()

  const confirm = () => {
    message.success('复制成功!');
  };
  const deleteConfirm = () => {
    message.success('删除成功!');
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Link to={isPubliced ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
              <Space>
                {isStar && <StarOutlined style={{ color: 'red' }} />}
                {title}
              </Space>
            </Link>
          </div>
          <div>
            <Space size={'large'}>
              {isPubliced ? <Tag icon={<CheckCircleOutlined />} color="#87d068">已发布</Tag> : <Tag icon={<ClockCircleOutlined />} color="default">未发布</Tag>}
              <span>答卷: {answerCount}</span>
              <span>时间: {createTime}</span>
            </Space>
          </div>
        </div>
        <Divider style={{ margin: '15px' }} />
        <div className={styles['action_container']}>
          <div>
            <Flex gap="small" wrap="wrap">
              <Button type="text" icon={<EditOutlined />} onClick={() => nav(`/question/edit/${_id}`)}>编辑问卷</Button>
              <Button type="text" icon={<LineChartOutlined />} onClick={() => nav(`/question/stat/${_id}`)} disabled={!isPubliced}>问卷统计</Button>
            </Flex>
          </div>
          <div>
            <Flex gap="small" wrap="wrap">
              <Button type="text" icon={<StarOutlined />}>{isStar ? '取消星标' : '设为星标'}</Button>
              <Popconfirm
                title="是否复制?"
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >
                <Button type="text" icon={<CopyOutlined />}>复制</Button>
              </Popconfirm>
              <Popconfirm
                title="是否删除?"
                onConfirm={deleteConfirm}
                okText="Yes"
                cancelText="No"
              >
                <Button type="text" danger icon={<DeleteOutlined />}>删除</Button>
              </Popconfirm>
            </Flex>
          </div>
        </div>
      </div >
    </>
  )
}


export default QuestionCard