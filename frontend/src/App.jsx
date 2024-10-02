// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateUser from "./components/userCreate";
import Login from "./components/login";
import Home from "./components/home";
import Logout from "./components/logout";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-[#FFDE95] p-8 gap-5 flex text-3xl h-20">
          <a className="text-purple-600 mr-6" href="/">Home</a>
          <a className="text-purple-600" href="/create-user">Create User</a>
          <a className="text-purple-600 mr-6" href="/login">Login</a>
          <a className="text-purple-600 mr-6" href="/logout">Logout</a>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
