import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image src="/logo.png" alt="Raise the Bar Logo" width={150} height={50} />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
