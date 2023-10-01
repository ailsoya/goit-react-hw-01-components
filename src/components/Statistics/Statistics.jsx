import React from "react"
import styles from "./Staristics.module.css"

export const Statistics = ({ users }) => {
    return (
        <section className={styles.Statistics}>
            <h2 className={styles.Title}>Upload stats</h2>
            
            <ul className={styles.StatList}>
                {users.map((user) => (
                    <li className={styles.Item}>
                        <span className={styles.Label}>{user.label}</span>
                        <span className={styles.Percentage}>{user.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}