import { Menu } from './pages/Menu'
import './styles/global.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Service } from './pages/Service'
import { Contact } from './pages/Contact'
import { Footer } from './pages/Footer'

export function App() {

  return (
    <div>
      <Menu />

      <Home />

      <Service />

      <About />

      <Contact />

      <Footer />

    </div>
  )
}