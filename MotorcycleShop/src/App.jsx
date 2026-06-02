import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
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
          {/*<Route path='/signup' element={<Signup user={user} setUser={setUser}/>}/>*/}
          {/*<Route path='/login' element={<Login user={user} setUser={setUser}/>}/>*/}
        </Routes>
      </main>
    </>
  )
}

export default App
