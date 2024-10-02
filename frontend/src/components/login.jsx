// src/components/Login.js

import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", { email, password });
      console.log("Login successful:", response.data);

   
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className=" h-screen w-full p-10 text-white bg-[#B7E0FF] ">
    <form  className="form  w-1/3 mx-auto mt-10 " onSubmit={handleSubmit}>
    <h3 className="text-3xl text-blue-700 mb-3"> Login to your Account</h3>
      <input className=" px-3 py-2 rounded-md bg-transparent border-2 border-zinc-400 outline-none" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className =" px-3 py-2 rounded-md bg-transparent border-2 border-zinc-400 outline-none" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className=" px-5 py-2 rounded-md bg-blue-400 text-white mt-10"  type="submit">Login</button>
    </form>
    <a className="text-purple-600" href="/"> back to home</a>
    </div>
  );
}

export default Login;
