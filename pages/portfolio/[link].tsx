import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import BackcallPopup from "../../components/BackcallPopup/BackcallPopup";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import portfolioData from "../../components/portfolio.data";
import Content from "../../components/Portfolio/Content";
import LeftSideBar from "../../components/Portfolio/leftSideBar";
import s from '../../components/Portfolio/portfolio.module.scss'

const DetailPortfolio: NextPage = () => {

  const router = useRouter()
  const {link} = router.query
  const work = portfolioData.find(e => e.link == link)

  return(
    <>
      <Head>
        <title>{work?.subTitle} / Catlense</title>
      </Head>
      <BackcallPopup />
      <Header />
      <div className={`container ${s.portfolio}`}>
        <LeftSideBar data={work} />
        <Content data={work} />
      </div>
      <Footer />
    </>
  )
}

export default DetailPortfolio;