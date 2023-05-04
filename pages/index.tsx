import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Homepage from '../components/Pages/Homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Chain</title>
        <meta name="Chain" content="NFT Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </>
  )
}
