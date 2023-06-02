import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <header>
        <h1>header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  )
}

export default Layout