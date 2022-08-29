import Header from './components/Header'
import Footer from './components/footer'


import { mystore } from './REDUX/store'
import { Provider } from 'react-redux'

export default function Layout({ children }) {
  return (
    <>

      <Provider store={mystore}>

        <Header />
        {children}
        <Footer />

      </Provider>

    </>
  )
}
