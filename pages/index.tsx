import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'
import {Button, Typography, Grid, Link} from "@mui/material";
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
        <Grid container direction="row" justifyContent="center" columnSpacing={2}>
          <Grid item  > <Button variant="outlined" color="primary"> Coming Soon...</Button> </Grid>
          <Grid item  > <Button component={Link} href="https://blog.lekan.dev" variant="outlined"  target="_blank" color="secondary"> Visit Blog</Button> </Grid>
        </Grid>
        
        

       
      </main>

      <footer className={styles.footer}>
 <Typography>Alaf Dev  © {" "}{new Date().getFullYear()}</Typography>
      </footer>
    </div>
  )
}

export default Home
