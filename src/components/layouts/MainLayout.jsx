import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"
import FavsSidebar from "../organisms/FavsSidebar"

const MainLayout = () => {
  return (
    <>
      <Header />
      <FavsSidebar />
      <main className="flex-1 flex">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
