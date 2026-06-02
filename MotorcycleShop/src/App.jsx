import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import {useEffect, useState} from "react"
import BikeDetailsPage from "./pages/BikeDetailsPage.jsx";

function App() {

  return (
    <>
      <Header />
      <main className='main-content'>
        <Routes>
          <Route
            path="/"
            element={
                <Home />
            }
          />
          <Route
            path="/bike/:id"
            element={<BikeDetailsPage />
            }
          />
          <Route
            path="/contact" element={<Contact/>}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
