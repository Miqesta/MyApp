import React, { useState } from "react";

function Task2() {
  // 📌 Input-ების state (email, password, confirmPassword)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // 📌 Register ფუნქცია
  const handleRegister = (e) => {
    e.preventDefault();

    // 📌 Password-ის დამოწმება
    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    // 📌 რეალურ პროექტში აქ მოხდებოდა API call → /register
    if (email && password) {
      setMessage(`✅ Account created for ${email}`);
      // აქ შეიძლება მონაცემების გაწმენდაც
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setMessage("❌ Please fill all fields!");
    }
  };

  return (
    <div style={{ border: "1px solid gray", padding: "20px", margin: "20px" }}>
      <h2>📝 Task 2: Register with Email & Password</h2>

      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // 👉 controlled input
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Confirm Password:</label><br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Register
        </button>
      </form>

      {/* 📌 წარმატება ან შეცდომა */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Task2;
