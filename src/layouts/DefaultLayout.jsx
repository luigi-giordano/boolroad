import { Outlet } from "react-router-dom"
import Header from "../components/Header"

function DefaultLayout() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="py-5">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
