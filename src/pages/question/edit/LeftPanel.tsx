import { FC } from 'react'
import { AppstoreAddOutlined, BarsOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import ComponentLib from './ComponentLib';
import Layers from './Layers';

const LeftPanel: FC = () => {
  const tabsItem = [
    {
      key: 'componentList',
      label: '组件库',
      icon: <AppstoreAddOutlined />,
      children: <ComponentLib />
    },
    {
      key: 'layer',
      label: '图层',
      icon: <BarsOutlined />,
      children: <Layers />
    }
  ]
  return (
    <Tabs items={tabsItem} defaultActiveKey='componentList'></Tabs>
  )
}

export default LeftPanel