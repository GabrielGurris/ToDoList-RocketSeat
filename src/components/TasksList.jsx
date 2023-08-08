import trash from '../assets/Layer1.svg';
import styles from './TasksList.module.css';

export function TasksList() {
    return (
        <div>
            <header className={styles.header}>
                <span>Tarefas criadas
                    <div className={styles.p}>0</div>
                </span>
                <span>Concluídas
                    <div className={styles.p}>0</div>
                </span>
            </header>
            <div className={styles.main}>
                <div className={styles.round}>
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox"></label>
                </div>
                <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <img src={trash} alt="" />
            </div>
        </div>
    )
}