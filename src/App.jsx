import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { IntroCarousel } from './components/IntroCarousel'
import { Header } from './components/Header'
import { Cards } from './components/Cards'

function App() {

  return (
    <BrowserRouter>
      {/* <div className="min-h-screen"> */}
        <header className="fixed top-0 left-0 w-full">
          <Header />
        </header>

        <main className="mt-[53px]">
          <IntroCarousel/>
          <Cards />
        </main>

        <footer>

        </footer>
      {/* </div> */}
    </BrowserRouter> 
  )
}

export default App
