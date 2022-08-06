import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav.js'
import FootballSearch from '../components/catsearch'

export default function Home() {
  return (
    <>
    <Head>
      <title>Nosister</title>
    </Head>
    
    <div>
    <Nav/>
    </div>

    <div>
      <FootballSearch/>
    </div>
    </>
  )
}
