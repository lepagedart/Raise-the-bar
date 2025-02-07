import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        {/* First try using the standard img tag to avoid Next.js image issues */}
        <img src="/logo.png" alt="Raise the Bar Logo" width="150" height="50" style={styles.logo} />
      </div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

// Inline Styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0f172a", // Dark blue background
    padding: "10px 20px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    maxHeight: "50px", // Ensures proper scaling
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  }
};
