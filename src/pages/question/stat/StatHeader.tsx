import { FC, useRef } from "react";
import styles from './StatHeader.module.scss'
import { Button, Input, InputRef, Popover, QRCode, Space, Tooltip, message } from "antd";
import { CopyOutlined, EditOutlined, LeftOutlined, QrcodeOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import usePageInfo from "../../../hooks/usePageInfo";

const StatHeader: FC = () => {
  const nav = useNavigate()
  const { id = '' } = useParams()
  const { title } = usePageInfo()
  const url = `http://localhost:3000/question/${id}`

  const inputRef = useRef<InputRef>(null)
  const handleCopy = () => {
    const ele = inputRef.current
    if (ele === null) return
    ele.select()
    document.execCommand('copy')
    message.success('复制成功')
  }
  return (
    <>
      <div className={styles.container}>
        <Space>
          <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>返回</Button>
          <p>{title}</p>
        </Space>
        <Space>
          <Input style={{ width: 420 }} defaultValue={url} ref={inputRef} />
          <Tooltip title='复制'>
            <Button
              type="primary"
              icon={<CopyOutlined />}
              onClick={handleCopy}
            />
          </Tooltip>
          <Popover content={<QRCode value={url || '-'} />}>
            <Button
              type="primary"
              icon={<QrcodeOutlined />}
            />
          </Popover>
        </Space>
        <Space>
          <Button type="primary" icon={<EditOutlined />} onClick={() => nav(`/question/edit/${id}`)}>编辑问卷</Button>
        </Space>
      </div>
    </>
  )
}

export default StatHeader