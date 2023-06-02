import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"
import { Outlet } from "react-router-dom"
import { Wrapper } from "./styles"

const Layout = () => {
  return (
    <Wrapper>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </Wrapper>
  )
}

export default Layout