
import styles from './CreateTask.module.css';
import { PlusCircle } from "@phosphor-icons/react";
import { useState } from 'react';


export function CreateTask( {handleCreateNewTask, createdTasks, finishedTasks} ){

    const [newTask, setNewTask] = useState('');

    function handleNewTaskChange(event) {
        setNewTask(event.target.value);
      }

    return (
        <div>
            <form onSubmit={() => handleCreateNewTask(newTask)} action="" className={styles.form}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa" 
                    className={styles.input}
                    value={newTask}
                    onChange={handleNewTaskChange}
                />
                <button type="submit" className={styles.a}>Criar <PlusCircle size={24}/></button>
            </form>
            <header className={styles.header}>
                <span>Tarefas criadas
                    <div className={styles.number}>{createdTasks}</div>
                </span>
                <span>Concluídas
                    <div className={styles.number}>{createdTasks ? finishedTasks + ' de ' + createdTasks : createdTasks }</div>
                </span>
            </header>
            
        </div>
    )
}