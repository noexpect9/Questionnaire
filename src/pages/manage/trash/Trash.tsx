import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import styles from '../list/Common.module.scss'
import { Typography, Table, TableProps, Button, Space, Modal } from 'antd'
import { DeleteOutlined, UndoOutlined } from "@ant-design/icons";
import ListSearch from "../../../components/ListSearch";
const { Title } = Typography

const { confirm } = Modal

interface DataType {
  _id: string | number;
  title: string;
  isPubliced: boolean;
  answerCount: number;
  createTime: string
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: '_id',
    align: 'center',
    key: '_id',
  },
  {
    title: '问卷名称',
    dataIndex: 'title',
    align: 'center',
    key: 'title',
  },
  {
    title: '是否发布',
    dataIndex: 'isPubliced',
    align: 'center',
    key: 'isPubliced',
    render: (isPubliced: boolean) => {
      return isPubliced ? '已发布' : '未发布'
    }
  },
  {
    title: '问卷统计',
    dataIndex: 'answerCount',
    align: 'center',
    key: 'answerCount',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    align: 'center',
    key: 'createTime',
  }
]

const rawQuestionList: DataType[] = [
  {
    _id: 1,
    title: "title1",
    isPubliced: true,
    answerCount: 5,
    createTime: '2022-12-12 12:12:12'
  },
  {
    _id: 2,
    title: "title2",
    isPubliced: false,
    answerCount: 6,
    createTime: '2022-12-10 12:12:12'
  },
  {
    _id: 3,
    title: "title3",
    isPubliced: true,
    answerCount: 2,
    createTime: '2022-12-12 12:12:12'
  }
]

const Trash: FC = () => {
  useTitle('回收站 - 小慕问卷')
  const [selectRowId, setSelectRowId] = useState<string[]>([])
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setSelectRowId(selectedRowKeys as string[])
    },
  };
  const handleDelete = () => {
    confirm({
      title: '删除问卷',
      content: '确定要删除这些问卷吗?',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>我的问卷</div>
        <ListSearch />
      </div>
      <div>
        <Title level={3}>回收站</Title>
        <Space style={{ margin: '20px 0' }}>
          <Button icon={<UndoOutlined />} type="primary" disabled={selectRowId.length === 0}>恢复</Button>
          <Button icon={<DeleteOutlined />} danger disabled={selectRowId.length === 0} onClick={handleDelete}>删除</Button>
        </Space>
        <Table columns={columns}
          dataSource={rawQuestionList}
          rowKey={record => record._id}
          rowSelection={{ type: 'checkbox', ...rowSelection }} />
      </div>
    </>

  )
}

export default Trash