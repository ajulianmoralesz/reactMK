import React from "react";
import Layout from "./views/Layout";
import Home from "./views/Home";
import About from "./views/About";
import RickAndMorty from "./views/RickAndMorty";
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = function () {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />} />
            <Route path="rickandmorty" element={<RickAndMorty />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
