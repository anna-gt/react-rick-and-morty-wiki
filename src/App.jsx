import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

function App() {

  return (
    <BrowserRouter>
			<div className="App">
        <Navbar />
      </div>
			<div className="container">
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path="/episodes" element={<Episodes />} />
  				<Route path="/location" element={<Location />} />
				</Routes>
			</div>
		</BrowserRouter>
  )
}

export default App
