import React from "react";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar";
import AppRouter from "./components/router/AppRouter";

function App() {

  return (
    <HashRouter>
			<div className="App">
        <Navbar />
      </div>
			<div className="container">
				<AppRouter />
			</div>
		</HashRouter>
  )
}

export default App
