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
      </Head>
      <BackcallPopup />
      <Header />
      <PortfolioTable />
      <Footer />
    </>
  )

}

export default Portfolio