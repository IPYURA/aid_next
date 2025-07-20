import styles from './login-layout.module.css';

function LoginLayout({children}) {
    return (
        <div className={styles.wrap}>
            <div className={styles.loginForm}>
                {children}
            </div>
        </div>
    )
}
export default LoginLayout;