import { Grid } from '@mui/material'
import Head from 'next/head'
import Left from '../components/Left'
import Right from '../components/Right'
import Feed from '../components/Feed'
import styles from '../styles/Home.module.css'

export default function Home() {
  let title = "Let's Connect"
  return (
    <div className={styles}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Designed in Next and Material UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container >

        <Grid item md={3} lg={2} >
          <Left />
        </Grid>

        <Grid item md={9} lg={6} >
          <Feed />
        </Grid>

        <Grid item lg={4} >
          <Right />
        </Grid>

      </Grid>
    </div>
  )
}
