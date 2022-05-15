import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import FirstScreen from '../components/Index/FirstScreen/FirstScreen'
import AboutBlock from '../components/Index/AboutBlock/AboutBlock'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>catlense</title>
      </Head>

      <Header />
      <FirstScreen />
      <AboutBlock />
    </>
  )
}

export default Home
