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
import OGImage from '../../assets/og-image.png'

const DetailPortfolio: NextPage = () => {

  const router = useRouter()
  const {link} = router.query
  const work = portfolioData.find(e => e.link == link)

  return(
    <>
      <Head>
        <title>{work?.subTitle} / Catlense</title>
        <meta name="description" content={work?.description} />
        <meta name="keywords" content={`${work?.title}, ${work?.customer.name}, ${work?.subTitle}, ${work?.text}, ${work?.date}`} />
        <meta property="og:image" content={OGImage.src} />
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