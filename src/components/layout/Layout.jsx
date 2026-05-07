import { Outlet } from 'react-router-dom'
import CustomCursor from '../ui/CustomCursor'
import InteractiveBg from '../ui/InteractiveBg'
import ScrollProgress from '../ui/ScrollProgress'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <CustomCursor />
      <InteractiveBg />
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
