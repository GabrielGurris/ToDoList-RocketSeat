import trash from '../assets/Layer1.svg';
import styles from './TasksList.module.css';

export function TasksList() {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.round}>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox"></label>
                </div>
                <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <img src={trash} alt="" />
            </div>
        </div>
    )
}