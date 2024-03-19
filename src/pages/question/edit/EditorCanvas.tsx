import { FC } from 'react'
import styles from './EditorCanvas.module.scss'
import useComponentsInfo from '../../../hooks/useComponentsInfo'
import { Spin } from 'antd'
import getComponentConfig from '../../../components/QuestionComponents'
import { ComponentsInfoType } from '../../../store/componentsReducer'

// 生成组件
function generateComponent(component: ComponentsInfoType) {
  const { type, props } = component
  const componentConfig = getComponentConfig(type)
  if (componentConfig == null) return null
  const { Component } = componentConfig
  return <Component {...props} />
}

type PropsType = {
  loading?: boolean
}
const EditorCanvas: FC<PropsType> = ({ loading }) => {
  const { componentList } = useComponentsInfo()
  if (loading) return <Spin fullscreen tip="Loading" />
  return (
    <div className={styles.container}>
      {componentList.map(item => {
        const { type, fe_id } = item
        return <div key={fe_id} className={styles.wrapper}>
          <div className={styles.components}>
            {generateComponent(item)}
          </div>
        </div>
      })}
      {/* <div className={styles.wrapper}>
        <div className={styles.components}>
          <QuestionTitle title='sadjlsadjsdl' isCenter={true} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.components}>
          <QuestionInput title='11111' placeholder='place' />
        </div>
      </div> */}

    </div>
  )
}

export default EditorCanvas