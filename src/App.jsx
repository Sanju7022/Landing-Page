import React from 'react'
import Header from './components/Header'
import Feature from './components/Feature'
import About from './components/About'
import aboutimage from '../src/images/about.png'
import aboutimage1 from '../src/images/download.png'
import Presentation from './components/Presentation'
import Contact from './components/Contact'


function App() {
  return (
    <div className='App'>
    <Header/>
    <Feature/>
    <About image={aboutimage} title="Comes With All You Need For Daily Life " button='Get The App'/>
    <Presentation/>
    <About image={aboutimage1} title="Download And Get The App Now " button='Download'/>
    <Contact/>
    </div>
  )
}

export default App