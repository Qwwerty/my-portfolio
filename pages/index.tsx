import Image from 'next/image'
import {Header} from '../components/Header'

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Header/>

      <div className={styles.container}>
        <div className={`${styles.containerInfo} animate__animated animate__backInUp`}>
          <div className={styles.info}>
            <img src="/images/borderimage.svg" width={189} height={203} alt="border-image"/>
            <div>
              <div></div>
              <h5>DESENVOLVEDOR FULLSTACK</h5>
              <h1>RHALF OLIVEIRA</h1>

              <p>
                Olá me chamo Paulo Henrique atualmente tenho 18 anos sou de São Bernardo do Campo, São Paulo, e a minha
                maior paixão é programar, lembro que comecei com apenas 9 anos quando começava criar pequenos sites
                apenas
                por diversão, e hoje virou meu trabalho.
              </p>

              <a href="#">rhalfsouza@hotmail.com</a>
            </div>
          </div>

          <Image width={336} height={283} src="/images/undraw_Master_plan_re_jvit 1.svg" alt="Master_plan"/>
        </div>
      </div>
    </>
  )
}
