import "../styles/Header.css";


export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon"></div>
        Apex <span>Moto</span>
      </div>

      <nav>
        <a href="/">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <button className="header-btn">
        Shop Now
      </button>
    </header>
  );
}