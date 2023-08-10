import styles from './Task.module.css';
import { PlusCircle } from "@phosphor-icons/react";

export function Task(){
    return (
        <div>
            <form action="" className={styles.form}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa" 
                    className={styles.input}
                />
                <a href="#" className={styles.a}>Criar <PlusCircle size={24}/></a>
            </form>
            <header className={styles.header}>
                <span>Tarefas criadas
                    <div className={styles.number}>0</div>
                </span>
                <span>Concluídas
                    <div className={styles.number}>0</div>
                </span>
            </header>
        </div>
    )
}