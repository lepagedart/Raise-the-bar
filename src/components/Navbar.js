import Image from "next/image"; // Import Next.js Image component
import Link from "next/link";   // Import Next.js Link for navigation

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <img src="logo.png" alt="Raise the Bar Logo" width={150} height={50} />
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

// Inline Styles (For simplicity; can be moved to a CSS file)
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
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  }
};
