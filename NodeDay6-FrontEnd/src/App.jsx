import Profile from "./components/Profile";
import SignIN from "./components/SignIN";
import SignUp from "./components/SignUp";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div>
      {token ? (
        <Profile setToken={token} />
      ) : (
        <div>
          <SignUp />
          <SignIN setToken={token} />
        </div>
      )}
    </div>
  );
}

export default App;
