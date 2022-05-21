import { NextPage } from "next";
import Head from "next/head";
import BackcallPopup from "../../components/BackcallPopup/BackcallPopup";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PortfolioTable from "../../components/Portfolio/PortfolioTable";

const Portfolio: NextPage = () => {

  return(
    <>
      <Head>
        <title>Портфолио / Catlense</title>
        <meta name="keywords" content="Портфолио catlense, портфолио кэтленс, портфолио Максим Воронин, портфолио, сайты, красивые сайты, топ сайтов, лучшие сайты, интересные сайты, сайт, купить сайт, заказать сайт, заказать лендинг, заказать визитку, заказать проект" />
        <meta name="description" content="Портфолио Catlense Agency. Только взгляните на наши работы!" />
      </Head>
      <BackcallPopup />
      <Header />
      <PortfolioTable />
      <Footer />
    </>
  )

}

export default Portfolio