import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentsStateType } from "../store/componentsReducer";

// redux中获取组件列表 
function useComponentsInfo() {
  const components = useSelector<StateType>((state: StateType) => state.components) as ComponentsStateType
  const { componentList = [], selectedId = '' } = components
  return {
    componentList,
    selectedId
  }
}

export default useComponentsInfo