import styles from './styles.module.scss'
import {FiCpu} from 'react-icons/fi'

interface AboutProps {
  myAge: number;
}

export function About ({myAge}: AboutProps) {
  return (
    <div className={`${styles.container} animate__animated animate__backInUp`}>
      <section>
        <h4>
          <FiCpu/>
          Sobre
        </h4>

        <h5>
          Conheça um pouco sobre mim
        </h5>

        <p>
          Olá me chamo Rhalf Oliveira atualmente tenho {myAge} anos sou de Ubá, Minas Gerais, e a minha
          maior paixão é programar, lembro que começei a me interessar por computação desde criança,
          por diversão, e hoje virou meu trabalho.
        </p>

        <p>
          Eu amo aprender, sempre estudo e tento aperfeiçoar o meu trabalho amo entregar as coisas de um jeito
          profissional e elegante <span>;)</span>
        </p>

      </section>

      <section>
        <h4>
          <FiCpu/>
          Certificados
        </h4>

        <h5>Harvard University</h5>
        <p>
          CS50x Science Computer
        </p>

        <h5>Origamid</h5>
        <p>
          UI Design Avançado
        </p>
        <p>
          UI Design Avançado
        </p>
        <p>
          UI Design Avançado
        </p>
      </section>
    </div>
  )
}