import React, { FC } from "react";
import useQuestionDetail from "../../../hooks/useQuestionDetail";
import styles from './index.module.scss'
import EditorCanvas from "./EditorCanvas";

const Edit: FC = () => {
  const { loading } = useQuestionDetail()
  return (
    <div className={styles.container}>
      <div>Header</div>
      <div className={styles.content}>
        <div className={styles['content-wrap']}>
          <section className={styles.left}>Left</section>
          <section className={styles.center}>
            <div className={styles["canvas-wrapper"]}>
              <div style={{ height: '1200px' }}>
                <EditorCanvas loading={loading}/>
              </div>
            </div>
          </section>
          <section className={styles.right}>Right</section>
        </div>
      </div>
    </div>
  )
}

export default Edit