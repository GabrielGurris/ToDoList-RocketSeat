import styles from './Task.module.css';
import logoPlus from './assets/Layer2.svg';

export function Task(){
    return (
        <div>
            <form action="" className={styles.form}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa" 
                    className={styles.input}
                />
                <a href="#" className={styles.a}>Criar <img src={logoPlus} alt="" /></a>
                
            </form>
            
        </div>
    )
}