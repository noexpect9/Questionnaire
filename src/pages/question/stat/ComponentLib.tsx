import { FC } from "react";
import styles from './ComponentLib.module.scss'
import useComponentsInfo from "../../../hooks/useComponentsInfo";
import classNames from "classnames";
import { generateComponent } from "../edit/EditorCanvas";

type PropsType = {
  selectComponentId: string
  setSelectComponentId: (id: string) => void
  setSelectComponentType: (type: string) => void
}

const ComponentLib: FC<PropsType> = (props: PropsType) => {
  const { selectComponentId, setSelectComponentId, setSelectComponentType } = props
  const { componentList } = useComponentsInfo()
  return (
    <div className={styles.container}>
      {componentList.map(item => {
        // 从组件列表中获取每个组件的id
        const { fe_id, type } = item
        // 拼接class
        const wrapperDefaultClass = styles.wrapper
        const selectedClass = styles.selected
        const wrapperClass = classNames({
          [wrapperDefaultClass]: true,
          [selectedClass]: fe_id === selectComponentId,
        })

        return (
          <div key={fe_id} className={wrapperClass} onClick={() => { setSelectComponentId(fe_id); setSelectComponentType(type) }}>
            <div className={styles.components}>
              {generateComponent(item)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ComponentLib