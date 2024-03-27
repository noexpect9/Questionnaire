import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentsStateType } from "../store/componentsReducer";

// redux中获取组件列表 
function useComponentsInfo() {
  const components = useSelector<StateType>((state: StateType) => state.components.present) as ComponentsStateType
  const { componentList = [], selectedId = '', copiedComponent } = components
  // 获取当前选中的组件
  const selectedComponent = componentList.find(item => item.fe_id === selectedId)
  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent
  }
}

export default useComponentsInfo