import Head from 'next/head'
import { PageHeader } from '../components/header'
import { NavBar } from '../components/navigation'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Get help hiring the right developer for your project with Dev Lounge."/>
        <title>Find a Developer</title>      
      </Head>

      <PageHeader
        title='Dev Lounge'
        tagline='Find the right developer for your project'
      />  
    </>
  )
}
