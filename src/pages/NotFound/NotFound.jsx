import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Sahifa Topilmadi</h2>
        <p className="not-found-desc">
          Uzr, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.
        </p>
        <Link to="/" className="not-found-btn">
          ← Bosh Sahifaga Qaytish
        </Link>
      </div>
    </div>
  );
};

export default NotFound; // ✅ BU QATOR MUHIM!