import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import Header from "./constants/Header"
import Footer from "./constants/Footer"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ShopPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
