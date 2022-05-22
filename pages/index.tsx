import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import FirstScreen from '../components/Index/FirstScreen/FirstScreen'
import AboutBlock from '../components/Index/AboutBlock/AboutBlock'
import PortfolioBlock from '../components/Index/PortfolioBlock/PortfolioBlock'
import ContactsBlock from '../components/Index/ContactsBlock/ContactsBlock'
import Footer from '../components/Footer/Footer'
import BackcallPopup from '../components/BackcallPopup/BackcallPopup'
import OGImage from '../assets/og-image.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>catlense</title>
        <meta name="keywords" content="catlense, сайты, разработка сайтов, IT, it, сайт, хочу сайт, создание сайтов, кэтленс, Воронин, Ремвелл, Remwell, remwel, ремвел, гринвей, майгринвей, mygreenway, домен, .ru, .xyz, voronin.xyz, воронин.хйз, cms, crm, цмс, срм, управление сайтом, хостинг, сайт, купить сайт, заказать сайт, заказать лендинг, заказать визитку, заказать проект" />
        <meta name="desciprtion" content="Веб-студия, выполняющее полный комплекс работ по разработке сайтов." />
        <meta property="og:title" content="Catlense" />
        <meta property="og:url" content="https://catlense.ru" />
        <meta property="og:description" content="Веб-студия, выполняющее полный комплекс работ по разработке сайтов" />
        <meta property="og:image" content={OGImage.src} />
      </Head>
      <BackcallPopup />
      <Header />
      <FirstScreen />
      <AboutBlock />
      <PortfolioBlock />
      <ContactsBlock />
      <Footer />
    </>
  )
}

export default Home
