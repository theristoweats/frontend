import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductResearch from "./pages/ProductResearch";
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import Footer from "./components/Footer";

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
          exact
        ></Route>
        <Route
          path="/products/category/:category"
          element={<ProductResearch />}
        ></Route>
        
        <Route
          path="/products/category/:category/name/:name/min/:min/max/:max/shown/:shown/order/:order/pageNumber/:pageNumber/"
          element={<ProductResearch />}
          exact
        ></Route>
      </Routes>
      <Footer />

    </BrowserRouter>
    </>
  );
}

export default App;
