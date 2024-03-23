import { FC } from "react";
import useComponentsInfo from "../../../hooks/useComponentsInfo";
import { Empty } from "antd";
import getComponentConfig from "../../../components/QuestionComponents";

const ComponentProp: FC = () => {
  // 当前选中的组件
  const { selectedComponent } = useComponentsInfo()
  if (selectedComponent == null) return <Empty description="请选择组件" />
  const { type, props } = selectedComponent
  const componentConfig = getComponentConfig(type)
  if (componentConfig == null) return <Empty description="请选择组件" />
  const { PropComponent } = componentConfig
  return <PropComponent {...props} />
}

export default ComponentProp