import styles from './styles.module.scss'
import {FiCpu} from 'react-icons/fi'
import { Course } from './Course'

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

        <Course title="Rocketseat">
          <a href="https://drive.google.com/file/d/1tYH-GcM7KFUqSyPhmp_kc_0O3P-r2s-L/view?usp=sharing" target="_blank" rel="noreferrer">
            Bootcamp Ignite - ReactJs
          </a>
          <a>
            Bootcamp Ignite - NodeJs
          </a>

          <h5>Fagoc</h5>
          <a>
            Bacharelado - Ciência da Computação
          </a>
        </Course>
        <Course title="Digital Innovation One">
          <a href="https://drive.google.com/file/d/1AP9hu3O1TiK0JEX0eORfUSr22467-3dO/view?usp=sharing" target="_blank" rel="noreferrer">
            Lógica de programação essencial
          </a>
          <a href="https://drive.google.com/file/d/1HixnaqK3dPYL2BrXPeG2a8ZWZb0Pk1NR/view?usp=sharing" target="_blank" rel="noreferrer">
            Recriando a página inicial do Instagram
          </a>
          <a href="https://drive.google.com/file/d/1rihX0Jz_gacMwN5IIXYnB2wedl-a8Onz/view?usp=sharing" target="_blank" rel="noreferrer">
            Programação para internet com JavaScript
          </a>
          <a href="https://drive.google.com/file/d/1SmdF6kb17yYWd2Rj9FwZJ6DRX-HTRgSl/view?usp=sharing" target="_blank" rel="noreferrer">
            Introdução a criação de websites com HTML5 e CSS3
          </a>
          <a href="https://drive.google.com/file/d/1cDpuL5nkLBmpF-KJUL8H-qLrJr8joN22/view?usp=sharing" target="_blank" rel="noreferrer">
             Git e ao GitHub
          </a>
        </Course>
        <Course title="Udemy">
          <a href="https://drive.google.com/file/d/1FQhfhUty_E3-JM6JXhet7ZmoDT_pvwT6/view?usp=sharing" target="_blank" rel="noreferrer">
            Curso Web Moderno Completo com Javascript
          </a>
          <a href="https://drive.google.com/file/d/1p66093zQkbrNtJvtG6Kg0hWR6xX7evvF/view?usp=sharing" target="_blank" rel="noreferrer">
            C# from the beginning
          </a>
          <a href="https://drive.google.com/file/d/1ffKMtKmED_s3LWyFVP_21O1-XKR5fuVv/view?usp=sharing" target="_blank" rel="noreferrer">
            vue js 2.0 - mastering Web Apps
          </a>
          <a href="https://drive.google.com/file/d/1_mAKtnTYBSIZPfatEh6HerjucWbKZtXq/view?usp=sharing" target="_blank" rel="noreferrer">
            Complete Responsive web Development
          </a>
          <a href="https://drive.google.com/file/d/1kytNZy7HX-ASaulUfaWLaMWmlmftYKtP/view?usp=sharing" target="_blank" rel="noreferrer">
            Express, Angular 1 e Node
          </a>
        </Course>
        <Course title="Senai">
          <a>
            Técnico em Mecânica
          </a>
        </Course>

      </section>
    </div>
  )
}