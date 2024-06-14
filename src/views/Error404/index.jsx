import styles from './Error404.module.css'
import { useRouteError } from 'react-router-dom'

export const Error404 = () => {
    const error = useRouteError()
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{error.status} Upps</h2>
            <p className={styles.description}>{error.data}</p>
        </div>
    )
}
