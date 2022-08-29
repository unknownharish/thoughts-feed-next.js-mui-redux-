import { createTheme, ThemeProvider } from '@mui/material'
import Layout from '../layout'
import '../styles/globals.css'

import {useSelector} from 'react-redux'

function MyApp({ Component, pageProps }) {


  const myTheme = createTheme({
    palette: {
      primary: {
       
        main: '#ca32f5',
     
      }
    }
  })

  return <>
    <ThemeProvider theme={myTheme}>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </ThemeProvider>
  </>
}

export default MyApp
