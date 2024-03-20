import { FC } from "react";
import { ComponentConfigType, componentTypeGrounp } from '../../../components/QuestionComponents'
import { Typography } from "antd";
import styles from './ComponentLib.module.scss'
import { useDispatch } from "react-redux";
import { addComponent } from "../../../store/componentsReducer";

function generateComponent(c: ComponentConfigType) {
  const { Component, defaultProps, type, title } = c
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()
  const handleComp = () => {
    dispatch(addComponent({
      fe_id: Date.now().toString(),
      title,
      type,
      props: defaultProps
    }))
  }

  return <div className={styles.warpper} onClick={handleComp} draggable>
    <div className={styles.component}>
      <Component {...defaultProps} />
    </div>
  </div>
}

const { Title } = Typography
const ComponentLib: FC = () => {
  return (
    <>
      {
        componentTypeGrounp.map((item, index) => {
          const { groupName, components = [] } = item
          return <div key={index}>
            <Title level={3}>{groupName}</Title>
            {
              components.map((comp, i) => {
                return <div key={i}>
                  {generateComponent(comp)}
                </div>
              })
            }
          </div>
        })
      }
    </>
  )
}

export default ComponentLib