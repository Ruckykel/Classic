import About from './About'
import Clients from './Clients'
import Contact from './Contact'
import Hero from './Hero'
import Navbar from './Navbar'
import RecentWorkSection from './RecentWorkSection'

const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <Hero />
      <About />
      <RecentWorkSection />
      <Clients/>
      <Contact/>
    </div>
  )
}

export default Home