import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'

export default function Home() {
  return (
    <>
      <Nav />
      <Showcase />
      <Footer />
    </>
  )
}
