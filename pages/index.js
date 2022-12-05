import Head from 'next/head'
import { PageHeader } from '../components/header'
import { NavBar } from '../components/navigation'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Get help hiring the right developer for your project with Dev Lounge."/>
        <title>Find your next bike</title>      
      </Head>

      <PageHeader
        title='Bike Lounge'
        tagline='Start your next motorcycle adventure'
      />  
    </>
  )
}
