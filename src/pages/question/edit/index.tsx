import React, { FC } from "react";
import useQuestionDetail from "../../../hooks/useQuestionDetail";
import styles from './index.module.scss'
import EditorCanvas from "./EditorCanvas";
import EditHeader from "./EditHeader";
import { useDispatch } from "react-redux";
import { changeSeletedId } from "../../../store/componentsReducer";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const Edit: FC = () => {
  const { loading } = useQuestionDetail()
  const dispatch = useDispatch()

  const clearCanvas = () => {
    dispatch(changeSeletedId(''))
  }

  return (
    <div className={styles.container}>
      <EditHeader></EditHeader>
      <div className={styles.content}>
        <div className={styles['content-wrap']}>
          <section className={styles.left}>
            <LeftPanel />
          </section>
          <section className={styles.center} onClick={clearCanvas}>
            <div className={styles["canvas-wrapper"]}>
              <div style={{ height: '1200px' }}>
                <EditorCanvas loading={loading} />
              </div>
            </div>
          </section>
          <section className={styles.right}>
            <RightPanel />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Edit