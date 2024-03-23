import { BlockOutlined, CopyOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { copyComponent, deleteSelectedComponent, pasteComponent, toggleComponentHidden, toggleComponentLock } from "../../../store/componentsReducer";
import useComponentsInfo from "../../../hooks/useComponentsInfo";


const EditToolBar: FC = () => {
  const dispatch = useDispatch()
  const { selectedId, selectedComponent, copiedComponent } = useComponentsInfo()
  const { isLocked } = selectedComponent || {}

  const handleDelete = () => {
    dispatch(deleteSelectedComponent())
  }
  const handleVisible = () => {
    dispatch(toggleComponentHidden({ fe_id: selectedId, isHidden: true }))
  }
  const handleLock = () => {
    dispatch(toggleComponentLock({ fe_id: selectedId }))
  }
  const copy = () => {
    dispatch(copyComponent())
  }
  const paste = () => {
    dispatch(pasteComponent())
  }

  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button shape="circle" icon={<EyeInvisibleOutlined />} onClick={handleVisible}></Button>
      </Tooltip>
      <Tooltip title="锁定">
        <Button type={isLocked ? 'primary' : 'default'} shape="circle" icon={<LockOutlined />} onClick={handleLock}></Button>
      </Tooltip>
      <Tooltip title="复制">
        <Button shape="circle" icon={<CopyOutlined />} onClick={copy}></Button>
      </Tooltip>
      <Tooltip title="粘贴">
        <Button shape="circle" icon={<BlockOutlined />} onClick={paste} disabled={copiedComponent == null}></Button>
      </Tooltip>
    </Space>
  )
}

export default EditToolBar