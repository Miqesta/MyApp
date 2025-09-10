import React, { useState } from "react";

function Task3() {
  const [message, setMessage] = useState("");

  // 📌 ეს ფუნქცია უბრალოდ Mock-ია
  // რეალურ პროექტში აქ მოხდებოდა Google API-ს ინტეგრაცია
  const handleGoogleLogin = () => {
    setMessage("✅ Logged in with Google (mock)!");
  };

  return (
    <div style={{ border: "1px solid gray", padding: "20px", margin: "20px" }}>
      <h2>🌍 Task 3: Google Login (Social Auth)</h2>

      {/* Google Login Button */}
      <button
        onClick={handleGoogleLogin}
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px 20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Google logo პატარა emoji ვარიანტად */}
        <span>🔵🔴🟡🟢</span> Login with Google
      </button>

      {/* Feedback Message */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Task3;
