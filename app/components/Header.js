import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>GoBus.lk</div>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>
          Home
        </a>
        <a href="/book" style={styles.link}>
          Book
        </a>
        <a href="/my-bookings" style={styles.link}>
          My Bookings
        </a>
        <a href="/contact" style={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#007bff",
    padding: "12px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "16px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Header;
