// components/Footer.js

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Raise the Bar Consulting. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#0f172a', // Match your site's background color
  color: 'white',
  textAlign: 'center',
  padding: '1rem',
  position: 'absolute',
  bottom: 0,
  width: '100%',
};
