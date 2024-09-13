import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img
                    src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Capa de Fundo"
                    className={styles.cover}
                />

                <div className={styles.profile}>
                    <strong>Fernando Zuchi</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#">
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </>
    );
}