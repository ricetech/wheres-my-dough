import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AppNavbar from "./components/AppNavbar";
import "./App.scss";

const App = () => {
  return (
    <div className="wheres-my-dough--app">
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
