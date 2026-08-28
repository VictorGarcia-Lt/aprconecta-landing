import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Metrics from './components/Metrics'
import Solutions from './components/Solutions'
import Offline from './components/Offline'
import MobileApp from './components/MobileApp'
import AdminDashboard from './components/AdminDashboard'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Metrics />
        <Solutions />
        <Offline />
        <MobileApp />
        <AdminDashboard />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
