import { NextPage } from "next";
import Head from "next/head";
import BackcallPopup from "../../components/BackcallPopup/BackcallPopup";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Portfolio: NextPage = () => {

  return(
    <>
      <Head>
        <title>catlense</title>
      </Head>
      <BackcallPopup />
      <Header />
      <Footer />
    </>
  )

}

export default Portfolio