import { BlockOutlined, CopyOutlined, DeleteOutlined, DownOutlined, EyeInvisibleOutlined, LockOutlined, RedoOutlined, UndoOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { copyComponent, deleteSelectedComponent, moveComponent, pasteComponent, toggleComponentHidden, toggleComponentLock } from "../../../store/componentsReducer";
import useComponentsInfo from "../../../hooks/useComponentsInfo";
import { ActionCreators } from "redux-undo";


const EditToolBar: FC = () => {
  const dispatch = useDispatch()
  const { selectedId, componentList, selectedComponent, copiedComponent } = useComponentsInfo()
  const { isLocked } = selectedComponent || {}
  // 获取组件列表的长度
  const curLength = componentList.length
  // 当前选中的列表index
  const selectedIndex = componentList.findIndex(item => item.fe_id === selectedId)
  // 是否是第一个
  const isFrist = selectedIndex <= 0
  // 是否是最后一个
  const isLast = selectedIndex + 1 >= curLength

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
  const upMove = () => {
    dispatch(moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex - 1 }))
  }

  const downMove = () => {
    dispatch(moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex + 1 }))
  }

  const undo = () => {
    dispatch(ActionCreators.undo())
  }
  const redo = () => {
    dispatch(ActionCreators.redo())
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
      <Tooltip title="上移">
        <Button shape="circle" icon={<UpOutlined />} onClick={upMove} disabled={isFrist}></Button>
      </Tooltip>
      <Tooltip title="下移">
        <Button shape="circle" icon={<DownOutlined />} onClick={downMove} disabled={isLast}></Button>
      </Tooltip>
      <Tooltip title="撤销">
        <Button shape="circle" icon={<UndoOutlined />} onClick={undo} disabled={isLast}></Button>
      </Tooltip>
      <Tooltip title="重做">
        <Button shape="circle" icon={<RedoOutlined />} onClick={redo} disabled={isLast}></Button>
      </Tooltip>
    </Space>
  )
}

export default EditToolBar