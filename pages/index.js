import Head from 'next/head'
import { PageHeader } from '../components/header'
import { NavBar } from '../components/navigation'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Get help finding the right motorcycle with Bike Lounge."/>
        <title>Find your next bike</title>      
      </Head>

      <PageHeader
        title='Bike Lounge'
        tagline='Start your next motorcycle adventure'
      />  
    </>
  )
}
