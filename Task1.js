import React, { useState } from "react";

function Task1() {
  // 📌 აქ ვინახავთ input-ების მნიშვნელობებს (email, password)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // 📌 Login ფუნქცია (თითქოს API-ს ვუკავშირდებით)
  const handleLogin = (e) => {
    e.preventDefault(); // თავიდან არ აახალგაზრდავოს გვერდი

    // მარტივი ლოგიკა — ჩვეულებრივ აქ Request უნდა წავიდეს Backend-ზე
    if (email === "test@example.com" && password === "123456") {
      setMessage("✅ Login successful! Welcome back!");
    } else {
      setMessage("❌ Invalid email or password.");
    }
  };

  return (
    <div style={{ border: "1px solid gray", padding: "20px", margin: "20px" }}>
      <h2>🔑 Task 1: Login with Email & Password</h2>

      {/* 📌 Login Form */}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // 👉 Controlled input
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // 👉 Controlled input
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Login
        </button>
      </form>

      {/* 📌 აქ ვაჩვენებთ წარმატების/შეცდომის მესიჯს */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Task1;
