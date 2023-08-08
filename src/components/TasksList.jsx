import trash from '../assets/Layer1.svg';
import styles from './TasksList.module.css';

export function TasksList(){
    return (
        <div>
            <header className={styles.header}>
                <span>Tarefas criadas <p className={styles.p1}>0</p></span>
                <span>Concluídas <p className={styles.p2}>0</p></span>
            </header>
            <main className={styles.main}>
                <input type="checkbox" name="" id=""/>
                <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <img src={trash} alt="" />
            </main>
        </div>
    )
}