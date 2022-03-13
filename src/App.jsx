import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';

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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
