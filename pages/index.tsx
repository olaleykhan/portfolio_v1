import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Button, Typography} from "@mui/material";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Olalekan Abdulfatah</title>
        <meta name="description" content="Olalekan, Software Engineer and Mechanic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button variant="outlined" color="primary"> Coming Soon...</Button>

       
      </main>

      <footer className={styles.footer}>
 <Typography></Typography>
      </footer>
    </div>
  )
}

export default Home
