import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar";
import AppRouter from "./components/router/AppRouter";

function App() {

  return (
    <BrowserRouter>
			<div className="App">
        <Navbar />
      </div>
			<div className="container">
				<AppRouter />
			</div>
		</BrowserRouter>
  )
}

export default App
