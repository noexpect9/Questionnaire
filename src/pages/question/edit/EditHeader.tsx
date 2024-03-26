import { ChangeEvent, FC, useState } from "react";
import styles from './EditHeader.module.scss'
import { Button, Input, Space, Typography } from "antd";
import { EditOutlined, LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import EditToolBar from "./EditToolBar";
import usePageInfo from "../../../hooks/usePageInfo";
import { useDispatch } from "react-redux";
import { changePageTitle } from "../../../store/pageInfoReducer";

const { Title } = Typography

const EditTitle: FC = () => {
  const { title } = usePageInfo()
  const [state, setState] = useState(false)
  const dispatch = useDispatch()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changePageTitle(e.target.value))
  }
  if (state) {
    return <Input value={title} onPressEnter={() => setState(false)} onBlur={() => setState(false)} onChange={(e) => handleChange(e)} />
  }
  return <Space>
    <Title>{title}</Title>
    <Button icon={<EditOutlined />} type="text" onClick={() => setState(true)}></Button>
  </Space>
}

const EditHeader: FC = () => {
  const nav = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>返回</Button>
            <EditTitle />
          </Space>
        </div>
        <div className={styles.main}>
          <EditToolBar />
        </div>
        <div className={styles.right}>
          <Space>
            <Button>保存</Button>
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default EditHeader