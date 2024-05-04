import * as React from "react";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#f4f4f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "20px auto",
    lineHeight: "1.6",
  },
  header: {
    color: "#4A90E2",
    borderBottom: "2px solid #ddd",
    paddingBottom: "10px",
  },
  subHeader: {
    color: "#333",
    paddingTop: "10px",
  },
  paragraph: {
    color: "#555",
    fontSize: "14px",
    marginTop: "5px",
    marginBottom: "5px",
  },
};

const EmailTemplate = ({ firstName, message, email }) => (
  <div style={styles.container}>
    <h1 style={styles.header}>Hello Tender Control Kft!</h1>
    <h2 style={styles.subHeader}>Üzenetet kaptál</h2>
    <p style={styles.paragraph}>
      <strong>Küldő:</strong> {firstName}
    </p>
    <p style={styles.paragraph}>
      <strong>Üzenet:</strong> {message}
    </p>
    <p style={styles.paragraph}>
      <strong>Email cím:</strong> {email}
    </p>
  </div>
);

export default EmailTemplate;
