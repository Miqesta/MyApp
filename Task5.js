import React, { useState } from "react";

function Task5() {
  // 📌 საწყისი მონაცემები
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+995 555 123 456",
  });

  const [isEditing, setIsEditing] = useState(false);

  // 🖊️ handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // 💾 მონაცემების შენახვა
  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Profile updated successfully ✅");
  };

  return (
    <div style={styles.container}>
      <h2>👤 Task 5: Profile Management</h2>

      {!isEditing ? (
        <div style={styles.card}>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <button style={styles.button} onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        </div>
      ) : (
        <form style={styles.card} onSubmit={handleSave}>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
            required
            style={styles.input}
          />
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Save</button>
        </form>
      )}
    </div>
  );
}

// 🎨 მარტივი Inline CSS
const styles = {
  container: {
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    background: "#fafafa",
    width: "300px",
    textAlign: "left",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Task5;
