import { ToastContainer } from 'react-toastify'
import './App.css'
import AssiTech from './components/AssiTech/AssiTech'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Natural from './components/Natural/Natural'
import Number from './components/Number/Number'
import Support from './components/Support/Support'

function App() {
  return (
    <>
    <Header />
    <Hero />
    <AssiTech />
    <Number />
    <Support />
    <Natural />
    <Form />
    <Footer />
    <ToastContainer />
    </>
  )
}

export default App
