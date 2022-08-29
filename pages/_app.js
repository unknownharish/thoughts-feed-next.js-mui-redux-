import { createTheme, ThemeProvider } from '@mui/material'
import Layout from '../layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  const myTheme = createTheme({
    palette: {
      primary: {
        // main: '#be32f5',
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
