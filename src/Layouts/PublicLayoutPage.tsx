import Header from '../Components/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const PublicLayoutPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayoutPage