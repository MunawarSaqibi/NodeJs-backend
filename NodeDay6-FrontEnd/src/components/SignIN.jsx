import axios from "axios";
import { useState } from "react";

const SignIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleUserLogin(e) {
    e.preventDefault();

    console.log("submitting login Form", email, password);

    try {
      const response = await axios.post("http://localhost:8080/signin", {
        email,
        password,
      });

      console.log("success:", response.data);

      const token = response.data?.token || response.data?.data?.token;
      if (token) {
        localStorage.setItem("token", response.data.token);
        window.location.reload();
        setToken(response.data.token);
      }

      alert("Login Successful!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Login failed.");
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Enter your registered Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={(e) => handleUserLogin(e)}>Sign In</button>
    </div>
  );
};

export default SignIN;
