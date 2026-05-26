import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>🍽️ Retseptlar Dunyosi</h3>
          <p>Mazali va oson retseptlar bir joyda.</p>
        </div>

        <div className="footer-links">
          <h4>Sahifalar</h4>
          <Link to="/">Bosh sahifa</Link>
          <Link to="/recipes">Retseptlar</Link>
          <Link to="/favorites">Sevimlilar</Link>
        </div>

        <div className="footer-links">
          <h4>Kategoriyalar</h4>
          <Link to="/recipes?category=Milliy taomlar">Milliy taomlar</Link>
          <Link to="/recipes?category=Tezkor taomlar">Tezkor taomlar</Link>
          <Link to="/recipes?category=Shirinliklar">Shirinliklar</Link>
        </div>

        <div className="footer-social">
          <h4>Bizni kuzating</h4>
          <div className="social-icons">
            <a href="#" rel="noreferrer">Telegram</a>
            <a href="#" rel="noreferrer">Instagram</a>
            <a href="#" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Retseptlar Dunyosi.</p>
      </div>
    </footer>
  );
};

export default Footer;