import { FC } from "react";
import useComponentsInfo from "../../../hooks/useComponentsInfo";
import { Empty } from "antd";
import getComponentConfig, { ComponentsPropsType } from "../../../components/QuestionComponents";
import { useDispatch } from "react-redux";
import { changeComponentProps } from "../../../store/componentsReducer";

const ComponentProp: FC = () => {
  const dispatch = useDispatch()
  // 当前选中的组件
  const { selectedComponent } = useComponentsInfo()
  if (selectedComponent == null) return <Empty description="请选择组件" />
  // 选中组件config
  const { type, props, isLocked } = selectedComponent
  const componentConfig = getComponentConfig(type)
  if (componentConfig == null) return <Empty description="请选择组件" />
  const { PropComponent } = componentConfig

  // 修改组件属性
  const handleProp = (newProps: ComponentsPropsType) => {
    // 如果选中的组件没有属性 返回
    if (selectedComponent == null) return
    const { fe_id } = selectedComponent
    dispatch(changeComponentProps({ fe_id, newProps }))
  }
  return <PropComponent {...props} onChange={handleProp} disabled={isLocked} />
}

export default ComponentProp