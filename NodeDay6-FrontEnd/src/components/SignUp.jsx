import axios from "axios";
import { useState } from "react";
import SignIN from "./SignIN";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleUserRegister(e) {
    e.preventDefault();
    console.log(username, email, password);

    try {
      const response = await axios.post("http://localhost:8080/signup", {
        username,
        email,
        password,
      });

      console.log("success:", response.data);
      alert("Registration Successful!");

    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Registration Failed.");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Username:"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />


      <input
        type="email"
        placeholder="Enter a valid Email:"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        type="password"
        placeholder="Enter Your Password:"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button
        onClick={(e) => {
          handleUserRegister(e);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default SignUp;
