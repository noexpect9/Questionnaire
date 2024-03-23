import { FileTextOutlined, SettingOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { FC } from "react";
import ComponentProp from "./ComponentProp";

const RightPanel: FC = () => {
  const tabsItem = [
    {
      key: 'prop',
      label: '属性',
      icon: <FileTextOutlined />,
      children: <ComponentProp />
    },
    {
      key: 'setting',
      label: '页面设置',
      icon: <SettingOutlined />,
      children: <div>页面设置</div>
    }
  ]
  return (
    <Tabs items={tabsItem} defaultActiveKey='prop'></Tabs>
  )
}

export default RightPanel