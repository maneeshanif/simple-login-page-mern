// src/components/CreateUser.js

import { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/create", formData);
      console.log("User created:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };



  return (
    <>
    <div className=" h-screen w-full   bg-[#ADD899] p-10 text-white ">
    <form onSubmit={handleSubmit}>
    <h3 className="text-3xl text-blue-700 mb-3"> Create User</h3>
      <input className=" px-3 py-2 rounded-md bg-transparent border-2 border-zinc-800  outline-none text-white " type="text" name="username" placeholder="username" value={formData.username} onChange={handleChange} />
      <input className=" px-3 py-2 rounded-md bg-transparent border-2 border-zinc-800  outline-none text-white " type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} />
      <input className=" px-3 py-2 rounded-md bg-transparent border-2 border-zinc-800  outline-none text-white " type="password" name="password" placeholder="password" value={formData.password} onChange={handleChange} />
      <input className=" px-3 py-2 rounded-md bg-transparent border-2 border-zinc-800  outline-none text-white " type="number" name="age" placeholder="age" value={formData.age} onChange={handleChange} />
      <button className=" px-5 py-2 rounded-md bg-blue-400 text-white" type="submit">Create User</button>
    </form>
    <a className="text-purple-600 px-14 py-2 text-2xl" href="/"> back to home</a>
    </div>
    </>
  );
}

export default CreateUser;
