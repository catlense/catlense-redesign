import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import FirstScreen from '../components/Index/FirstScreen/FirstScreen'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>catlense</title>
      </Head>

      <Header />
      <FirstScreen />
    </>
  )
}

export default Home
