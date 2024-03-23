import { FC, MouseEvent } from 'react'
import styles from './EditorCanvas.module.scss'
import useComponentsInfo from '../../../hooks/useComponentsInfo'
import { Spin } from 'antd'
import getComponentConfig from '../../../components/QuestionComponents'
import { ComponentsInfoType, changeSeletedId } from '../../../store/componentsReducer'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import useBindCanvasKeyPress from '../../../hooks/useBindCanvasKeyPress'

type PropsType = {
  loading?: boolean
}
// 根据传入的组件配置生成指定组件
export function generateComponent(component: ComponentsInfoType) {
  // 从默认组件配置中获取组件对应的type和props参数
  const { type, props } = component
  // 获取组件对应的配置对象
  const componentConfig = getComponentConfig(type)
  // 如果没有对应的组件 返回null
  if (componentConfig == null) return null
  // 根据组件配置生成对应组件 ComponentConfigType
  const { Component } = componentConfig
  return <Component {...props} />
}

const EditorCanvas: FC<PropsType> = ({ loading }) => {
  const dispatch = useDispatch()
  function handleComClick(e: MouseEvent, id: string) {
    // 阻止冒泡 取消已选中的组件
    e.stopPropagation()
    dispatch(changeSeletedId(id))
  }
  // 从redux中获取组件列表
  const { componentList, selectedId } = useComponentsInfo()
  // 快捷键操作
  useBindCanvasKeyPress()
  if (loading) return <Spin fullscreen tip="Loading" />
  return (
    <div className={styles.container}>
      {componentList.filter(item => !item.isHidden).map(item => {
        // 从组件列表中获取每个组件的id
        const { fe_id, isLocked } = item
        // 拼接class
        const wrapperDefaultClass = styles.wrapper
        const selectedClass = styles.selected
        const lockedClass = styles.locked
        const wrapperClass = classNames({
          [wrapperDefaultClass]: true,
          [selectedClass]: fe_id === selectedId,
          [lockedClass]: isLocked
        })

        return <div key={fe_id} className={wrapperClass} onClick={e => handleComClick(e, fe_id)}>
          <div className={styles.components}>
            {generateComponent(item)}
          </div>
        </div>
      })}
    </div>
  )
}

export default EditorCanvas