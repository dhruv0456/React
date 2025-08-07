import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Pagesh/SignUp";
import Desboard from "./Pagesh/Desboard";
import Login from "./Pagesh/Login";
import TaskForm from "./Pagesh/TaskForm";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/desboard" element={<Desboard />} />
        <Route path="/taskform" element={<TaskForm/>}></Route>
      </Routes>
    </>
  );
};

export default App;
