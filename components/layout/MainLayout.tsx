import Footer from "../common/Footer"
import Navbar from "../common/Navbar"

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout