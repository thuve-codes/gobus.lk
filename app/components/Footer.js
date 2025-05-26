import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} GoBus.lk. All rights reserved.
      </p>
      <div style={styles.links}>
        <a href="/terms" style={styles.link}>
          Terms
        </a>
        <a href="/privacy" style={styles.link}>
          Privacy
        </a>
        <a href="/contact" style={styles.link}>
          Contact
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#343a40",
    padding: "16px 24px",
    textAlign: "center",
    color: "white",
    marginTop: "auto",
  },
  text: {
    margin: "0 0 8px 0",
    fontSize: "14px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
  },
  link: {
    color: "white",
    fontSize: "14px",
    textDecoration: "none",
  },
};

export default Footer;
