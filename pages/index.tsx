import {GetServerSideProps} from "next";
import styles from '../styles/home.module.scss'

import {Header} from '../components/Header'
import {SectionInfo} from '../components/SectionInfo'
import {About} from '../components/About'

import {FiCpu} from 'react-icons/fi'


interface HomeProps {
  myAge: number;
}


export default function Home({myAge}: HomeProps) {
  return (
    <>
      <div className={styles.container}>
        <Header/>

        <div>
          <div className={`${styles.containerInfo} animate__animated animate__backInUp`}>
            <SectionInfo/>
            <div className={styles.containerInfoImg}>
              <img width={336} height={283} src="/images/undraw_Master_plan_re_jvit 1.svg" alt="Master_plan"/>
            </div>
          </div>

          <About myAge={myAge}/>

          <div className={`${styles.containerTech} animate__animated animate__backInLeft`}>
            <div>
              <h4>
                <FiCpu/>
                Tecnologias
              </h4>
            </div>

            <div className={styles.containerImg}>
              {/* eslint-disable @next/next/no-img-element */}
              <img src="/images/technologies/reactjs.png" alt="tecnologias"/>
              <img src="/images/technologies/nodejs.png" alt="tecnologias"/>
              <img src="/images/technologies/mysql.png" alt="tecnologias"/>
              <img src="/images/technologies/typescript.png" alt="tecnologias"/>
              <img src="/images/technologies/javascript.png" alt="tecnologias"/>
              <img src="/images/technologies/css.png" alt="tecnologias"/>
              <img src="/images/technologies/html.png" alt="tecnologias"/>
              <img src="/images/technologies/redis.png" alt="tecnologias"/>
              <img src="/images/technologies/sequelize.png" alt="tecnologias"/>
              <img src="/images/technologies/express.png" alt="tecnologias"/>
              <img src="/images/technologies/restapi.png" alt="tecnologias"/>
              <img src="/images/technologies/styledcomponents.png" alt="tecnologias"/>
              <img src="/images/technologies/redux.png" alt="tecnologias"/>
              <img src="/images/technologies/vuejs.png" width={25} alt="tecnologias"/>
              <img src="/images/technologies/vuetify.png" width={30} alt="tecnologias"/>
              <img src="/images/technologies/sass.png" width={30} alt="tecnologias"/>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      myAge: Number(new Date().getFullYear()) - 1998
    }
  }
}

