import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {

    const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    const [adminCredentials, setAdminCredentials] = useState({
      username: "admin",
      password: "admin123",
    });
    const [enteredCredentials, setEnteredCredentials] = useState({
      username: "",
      password: "",
    });

    const handleLogin = () => {
      if (
        enteredCredentials.username === adminCredentials.username &&
        enteredCredentials.password === adminCredentials.password
      ) {
        setAdminLoggedIn(true);
      } else {
        alert("Invalid credentials. Please try again.");
      }
    };
    return(
        <>
        <div className="login-container">
            <h2>Admin Login</h2>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={enteredCredentials.username}
              onChange={(e) =>
                setEnteredCredentials({
                  ...enteredCredentials,
                  username: e.target.value,
                })
              }
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={enteredCredentials.password}
              onChange={(e) =>
                setEnteredCredentials({
                  ...enteredCredentials,
                  password: e.target.value,
                })
              }
            />
            <Link to={"/data-viewer"}>
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </Link>
          </div>
        </>
    )
}
export default LogIn;









