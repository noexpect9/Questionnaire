import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteSelectedComponent } from "../../../store/componentsReducer";

const EditToolBar: FC = () => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteSelectedComponent())
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}></Button>
      </Tooltip>
    </Space>
  )
}

export default EditToolBar