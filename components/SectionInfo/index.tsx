import styles from './styles.module.scss';

export function SectionInfo() {
  return (
    <div className={styles.container}>
      <img src="/images/borderimage.svg" width={189} height={203} alt="border-image"/>
      <div>
        <div></div>
        <h5>DESENVOLVEDOR FULLSTACK</h5>
        <h1>RHALF OLIVEIRA</h1>

        <p>
          Olá, seja bem vindo a minha página na internet
          sou um amante de tecnologia, adoro criar aplicações
          e sites de forma moderna e profissional.
        </p>

        <a href="#">rhalfsouza@hotmail.com</a>
      </div>
    </div>

  )
}