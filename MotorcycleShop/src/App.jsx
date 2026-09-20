import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Products from "./pages/Products"
import CategoryPage from "./pages/CategoryPage"
import BikeDetailsPage from "./pages/BikeDetailsPage.jsx";
import Cart from "./pages/Cart"

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
          <Route
            path="/about" element={<About/>}
          />
          <Route
            path="/products" element={<Products/>}
          />
          <Route
            path="/products/:category" element={<CategoryPage/>}
          />
          <Route
            path="/cart" element={<Cart/>}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
