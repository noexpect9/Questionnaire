import { FC } from 'react'
import styles from './EditorCanvas.module.scss'
import QuestionInput from '../../../components/QuestionComponents/QuestionInput/QuestionInput'
import QuestionTitle from '../../../components/QuestionComponents/QuestionTitle/QuestionTitle'

const EditorCanvas: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.components}>
          <QuestionTitle text='sadjlsadjsdl' isCenter={true} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.components}>
          <QuestionInput text='11111' placeholder='place' />
        </div>
      </div>

    </div>
  )
}

export default EditorCanvas