import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Navbar from './components/Navbar'
import Header from './components/Header'
import HeadingSection from './components/HeadingSection'
import Community from './components/Community'
import ServiceItem from './components/ServiceItem'
import Article from './components/Article'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <HeadingSection/>
    <Community/>
    <ServiceItem/>
    <Article/>
    <Footer/>
    </>
  )
}

export default App
