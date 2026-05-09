import React, { useState } from "react";

import "./Auth.css";

export default function Auth() {

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const endpoint = isLogin
      ? "http://localhost:5000/login"
      : "http://localhost:5000/signup";

    const bodyData = isLogin
      ? {
          email,
          password
        }
      : {
          name,
          email,
          password,
          referral
        };

    try {

      const response = await fetch(endpoint, {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(bodyData)

      });

      const data = await response.json();

      setMessage(data.message);
      localStorage.setItem(
  "role",
  data.role
);
      setMessageType(
        response.ok ? "success" : "error"
      );

      if (response.ok) {

        setTimeout(() => {

          window.location.href = "/home";

        }, 1200);

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-box">

        <div className="auth-left">

          <h1>
            FITZONE
          </h1>

          <p>
            Train harder. Live stronger.
          </p>

        </div>

        <div className="auth-right">

          <div className="auth-toggle">

            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>

            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>

          </div>

          {
            message && (

              <div className={`auth-message ${messageType}`}>

                {message}

              </div>

            )
          }

          <form onSubmit={handleSubmit}>

            {!isLogin && (

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {!isLogin && (

              <input
                type="text"
                placeholder="Referral Code"
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
              />

            )}

            <button className="auth-submit">

              {isLogin ? "Login" : "Create Account"}

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}