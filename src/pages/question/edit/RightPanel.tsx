import { FileTextOutlined, SettingOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { FC, useEffect, useState } from "react";
import ComponentProp from "./ComponentProp";
import PageSetting from "./PageSetting";
import useComponentsInfo from "../../../hooks/useComponentsInfo";

type ActiveKey = 'prop' | 'setting'
const RightPanel: FC = () => {
  const { selectedId } = useComponentsInfo()
  const [activeKey, setActiveKey] = useState<ActiveKey>('prop')

  useEffect(() => {
    if (selectedId) setActiveKey('prop')
    else setActiveKey('setting')
  }, [selectedId])

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
      children: <PageSetting />
    }
  ]
  return (
    <Tabs items={tabsItem} activeKey={activeKey}></Tabs>
  )
}

export default RightPanel