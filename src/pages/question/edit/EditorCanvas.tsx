import { FC } from 'react'
import styles from './EditorCanvas.module.scss'
import useComponentsInfo from '../../../hooks/useComponentsInfo'
import { Spin } from 'antd'
import getComponentConfig from '../../../components/QuestionComponents'
import { ComponentsInfoType } from '../../../store/componentsReducer'

// 根据传入的组件配置生成指定组件
function generateComponent(component: ComponentsInfoType) {
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

type PropsType = {
  loading?: boolean
}
const EditorCanvas: FC<PropsType> = ({ loading }) => {
  // 从redux中获取组件列表
  const { componentList } = useComponentsInfo()
  if (loading) return <Spin fullscreen tip="Loading" />
  return (
    <div className={styles.container}>
      {componentList.map(item => {
        // 从组件列表中获取每个组件的id
        const { fe_id } = item
        return <div key={fe_id} className={styles.wrapper}>
          <div className={styles.components}>
            {generateComponent(item)}
          </div>
        </div>
      })}
    </div>
  )
}

export default EditorCanvas