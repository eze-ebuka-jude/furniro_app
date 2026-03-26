import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import Header from "./constants/Header"
import Footer from "./constants/Footer"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
