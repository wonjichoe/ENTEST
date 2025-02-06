import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { IntroCarousel } from './components/IntroCarousel'
import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <header className="fixed top-0 left-0 w-full z-10 bg-white">
        <Header />
      </header>

      <main className="mt-[53px]">
        <IntroCarousel/>
        <Cards />
      </main>

      <footer className='bg-[#1c1d1c]'>
        <Footer />
      </footer>
    </BrowserRouter> 
  )
}

export default App
