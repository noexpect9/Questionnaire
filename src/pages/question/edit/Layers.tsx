import { ChangeEvent, FC, useState } from "react";
import useComponentsInfo from "../../../hooks/useComponentsInfo";
import classNames from "classnames";
import styles from './Layers.module.scss'
import { Button, Divider, Input, Space, message } from "antd";
import { useDispatch } from "react-redux";
import { changeSeletedId, changeTitle, toggleComponentHidden, toggleComponentLock } from "../../../store/componentsReducer";
import { EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";

const Layers: FC = () => {
  const { componentList, selectedId } = useComponentsInfo()
  const dispatch = useDispatch()

  // 记录当前正在修改标题的组件
  const [currentTitleId, setCurrentTitleId] = useState('')
  const handleTitleClick = (id: string) => {
    const currentComponent = componentList.find(item => item.fe_id === id)
    if (currentComponent && currentComponent.isHidden) {
      message.info('该组件已被隐藏')
      return
    }
    if (id !== selectedId) {
      // 当前组件未被选中
      dispatch(changeSeletedId(id))
      setCurrentTitleId('')
      return
    }
    setCurrentTitleId(id)
  }
  // 修改标题
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (!value || !selectedId) return
    dispatch(changeTitle({ fe_id: selectedId, title: value }))
  }
  return (
    <>
      {componentList.map(item => {
        const { fe_id, title, isHidden, isLocked } = item
        // 拼接className
        const titleDefaultClass = styles.title
        const selectedClass = styles.selected
        const lockedClass = styles.locked
        const titleClass = classNames({
          [titleDefaultClass]: true,
          [selectedClass]: fe_id === selectedId,
          [lockedClass]: isLocked
        })
        return (
          <div key={fe_id}>
            <div className={styles.wrapper}>
              <div className={titleClass} onClick={() => handleTitleClick(fe_id)}>
                {fe_id === currentTitleId && <Input style={{ width: '400px' }} value={title} onChange={(e) => handleChange(e)} onPressEnter={() => setCurrentTitleId('')} onBlur={() => setCurrentTitleId('')} />}
                {fe_id !== currentTitleId && title}
              </div>
              <div className={styles.handler}>
                <Space>
                  <Button className={!isHidden ? styles.btn : ''} icon={<EyeInvisibleOutlined />} type={isLocked ? 'primary' : 'default'} onClick={() => dispatch(toggleComponentHidden({ fe_id, isHidden: !isHidden }))}></Button>
                  <Button className={styles.btn} icon={<LockOutlined />} type={isLocked ? 'default' : 'primary'} onClick={() => dispatch(toggleComponentLock({ fe_id }))}></Button>
                </Space>
              </div>
            </div>
            <Divider className={styles.divider} />
          </div>

        )
      })}
    </>
  )
}

export default Layers