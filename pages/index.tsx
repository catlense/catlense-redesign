import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import FirstScreen from '../components/Index/FirstScreen/FirstScreen'
import AboutBlock from '../components/Index/AboutBlock/AboutBlock'
import PortfolioBlock from '../components/Index/PortfolioBlock/PortfolioBlock'
import ContactsBlock from '../components/Index/ContactsBlock/ContactsBlock'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>catlense</title>
      </Head>

      <Header />
      <FirstScreen />
      <AboutBlock />
      <PortfolioBlock />
      <ContactsBlock />
    </>
  )
}

export default Home
