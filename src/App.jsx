import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main/main";

function App() {

  return (
    <BrowserRouter>
			<div className="container">
				<Routes>
					<Route path='/' element={<Main />} />
				</Routes>
			</div>
		</BrowserRouter>
  )
}

export default App
