import React from "react"
import styles from "./Statistics.module.css"

export const Statistics = ({ stats, title }) => {
    return (
        <section className={styles.Statistics}>
            {title && <h2 className={styles.Title}>{title}</h2>}
            
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