import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import styles from './Profile.module.css'

export const Profile = () => {
    const { pathname } = useLocation()
    console.log(useLocation())
    const navigate = useNavigate()
    const handleTabClick = (path) => {
        navigate(`/profile/${path}`)
    }

    return (
        <div>
            <Link to="/" className={styles.homeLink}>Inicio</Link>
            <div className={styles.tabContainer}>
                <span className={`${pathname.includes('my-info') ? styles.active : ''}${styles.tab}`}
                    onClick={() => handleTabClick('my-info')} style={{ marginRight: 8 }}>
                    Mi Información
                </span>
                <span className={`${pathname.includes('liked-events') ? styles.active : ''}${styles.tab}`} onClick={() => handleTabClick('liked-events')}>
                    Mis Eventos
                </span>
            </div>
            <Outlet />
        </div>
    )
}
