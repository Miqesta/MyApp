import React from "react";
import "./Task4.css"; // 📌 ჩვენი CSS

function Task4() {
  return (
    <div className="task4-container">
      <h2>🎨 Task 4: Responsive UI</h2>

      {/* Login Form Example */}
      <div className="form-card">
        <h3>Login</h3>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Registration Form Example */}
      <div className="form-card">
        <h3>Register</h3>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Task4;
