import styles from './NoTask.module.css';
import logoClip from './assets/Clipboard.svg';

export function NoTask(){
    return (
        <div className={styles.noTask}>
            <img src={logoClip} className={styles.logo} />
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}