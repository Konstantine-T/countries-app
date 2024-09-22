import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <a href="#default" className="logo">
        Bad ass site
      </a>
      <div className="header-right">
        <a href="">
          Smth on the right side of the header
        </a>
      </div>
    </header>
  );
};

export default Header;
