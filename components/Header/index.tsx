import styles from './styles.module.scss'

export function Header () {
  return (
    <header className={styles.container}>
      <span className="animate__animated animate__backInLeft">Rhalf Oliveira</span>
      <span className="animate__animated animate__backInRight">contact@rhalfsouza@hotmail.com</span>
    </header>
  )
}