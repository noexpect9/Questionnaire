import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentsStateType } from "../store/componentsReducer";

function useComponentsInfo() {
  const components = useSelector<StateType>((state: StateType) => state.components) as ComponentsStateType
  const { componentList = [] } = components
  return {
    componentList
  }
}

export default useComponentsInfo