import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home.jsx'
import Todos from './pages/todos.jsx'
import './index.css'
import Completedtodos from './pages/completed-todos.jsx'
import Navbar from './Navbar.jsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <div className="app-div">
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="todos" element={<Todos />} />
          <Route path="completed-todos" element={<Completedtodos />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);
