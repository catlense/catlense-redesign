import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import BackcallPopup from "../../components/BackcallPopup/BackcallPopup";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import portfolioData from "../../components/portfolio.data";

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

      <Footer />
    </>
  )
}

export default DetailPortfolio;