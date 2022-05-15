import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>catlense</title>
      </Head>

      <Header />
    </>
  )
}

export default Home
