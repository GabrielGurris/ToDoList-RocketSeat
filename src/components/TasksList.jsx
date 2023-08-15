/* eslint-disable react/prop-types */
import { Circle, CheckCircle, Trash } from '@phosphor-icons/react'
import styles from './TasksList.module.css';

export function TasksList( {content, isChecked, handleCheck, handleDeleteTask} ) {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.round}>
                {isChecked ?
                    <CheckCircle size={24} color="#5E50CE" onClick={() => handleCheck(content)} />
                    : <Circle size={24} color="#5E50CE" onClick={() => handleCheck(content)} />
                }
                </div>
                <span>{content}</span>
                <button onClick={handleDeleteTask} ><Trash /></button>
            </div>
        </div>
    )
}