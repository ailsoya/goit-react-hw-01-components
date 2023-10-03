import React from "react"
import styles from "./Statistics.module.css"

export const Statistics = ({ stats }) => {
    return (
        <section className={styles.Statistics}>
            <h2 className={styles.Title}>Upload stats</h2>
            
            <ul className={styles.StatList}>
                {stats.map((state) => (
                    <li className={styles.Item} key={state.id}>
                        {state.label && (
                            <span className={styles.Label}>{state.label}</span>
                        )}
                        <span className={styles.Percentage}>{state.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}