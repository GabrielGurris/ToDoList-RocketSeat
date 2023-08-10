import { Trash } from "@phosphor-icons/react";
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
                <a href="#"><Trash /></a>
            </div>
        </div>
    )
}