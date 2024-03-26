import { ChangeEvent, FC, useState } from "react";
import styles from './EditHeader.module.scss'
import { Button, Input, Space, Typography, message } from "antd";
import { EditOutlined, LeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import EditToolBar from "./EditToolBar";
import usePageInfo from "../../../hooks/usePageInfo";
import { useDispatch } from "react-redux";
import { changePageTitle } from "../../../store/pageInfoReducer";
import useComponentsInfo from "../../../hooks/useComponentsInfo";
import { useDebounceEffect, useRequest } from "ahooks";
import { saveQuestion } from "../../../api";

const { Title } = Typography
// 修改标题
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

// 保存按钮
const SaveQuestion: FC = () => {
  const { id = '' } = useParams()
  const { componentList } = useComponentsInfo()
  const pageInfo = usePageInfo()

  const { loading, run: save } = useRequest(async () => {
    return await saveQuestion(id, { ...pageInfo, components: componentList })
  }, {
    manual: true
  })
  useDebounceEffect(() => {
    save()
  }, [pageInfo, componentList], { wait: 1000 })

  return <Button onClick={save} disabled={loading}>保存</Button>
}
// 发布按钮
const PublishQuestion: FC = () => {
  const nav = useNavigate()
  const { id = '' } = useParams()
  const { componentList } = useComponentsInfo()
  const pageInfo = usePageInfo()

  const { loading, run: publicQuestion } = useRequest(async () => {
    return await saveQuestion(id, { ...pageInfo, components: componentList, isPubilced: true })
  }, {
    manual: true,
    onSuccess: () => {
      message.success('发布成功')
      nav('/question/stat/' + id)
    }
  })
  return <Button type="primary" onClick={publicQuestion} disabled={loading}>发布</Button>
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
            <SaveQuestion />
            <PublishQuestion />
          </Space>
        </div>
      </div>
    </div>
  )
}

export default EditHeader