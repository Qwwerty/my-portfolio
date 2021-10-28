import {GetServerSideProps} from "next";
import styles from '../styles/home.module.scss'

import {Header} from '../components/Header'
import {SectionInfo} from '../components/SectionInfo'
import {About} from '../components/About'
import { Row, Col } from 'react-bootstrap'
import { Card } from '../components/Card'

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

          <div className={`${styles.containerProject} animate__animated animate__backInLeft`}>
            <div>
              <h4>
                <FiCpu/>
                Projetos Pessoais
              </h4>
            </div>

            <Row className="d-flex justify-content-sm-around gap-1">
                <Col className="d-flex justify-content-center justify-content-sm-around">
                  <Card title="Move.it" src="/images/moveit.png" href="https://github.com/Qwwerty/Move-It">
                    <span>O Move.it é um App que utiliza a técnica de pomodoro, com o objetivo de melhorar sua produtividade e foco.</span>
                  </Card>
                </Col>

                <Col className="d-flex justify-content-center justify-content-around">
                  <Card title="dtmoney" src="/images/dtmoney.png" href="https://dtmoney-steel.vercel.app">
                    <span>O dtnmoney é um app para controle de finanças, entrada e saída de movimentos.</span>
                  </Card>
                </Col>

                <Col className="d-flex justify-content-center justify-content-around">
                  <Card title="ig.news" src="/images/ignews.png" href="https://ig-news-study.vercel.app">
                    <span>O projeto ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura.</span>
                  </Card>
                </Col>

                <Col className="d-flex justify-content-center justify-content-around">
                  <Card title="PlantManager" src="/images/plantManager.png" href="https://play.google.com/store/apps/details?id=com.zrcompanny.plantmanager">
                    <span>Aplicação mobile desenvolvida para controle de rega e acompanhamento de plantas.</span>
                  </Card>
                </Col>
            </Row>
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

