import React from "react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Favourites from "./pages/favourites/index";
import Details from "./pages/details/index";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./context";

function App() {
  return (
      <BrowserRouter>
    <GlobalState>
        <div className="min-h-screen p-6 pt-0 bg-white text-grey-600 text-lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
          </Routes>
        </div>
    </GlobalState>
      </BrowserRouter>
  );
}

export default App;
