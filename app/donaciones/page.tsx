import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Donaciones() {
  return (
    <>
      <Navbar />
      <section className="donations-section">
        <div className="donations-hero">
            <h1 className="donations-title">Tu ayuda hace la diferencia</h1>
            <p className="donations-subtitle">Con tu donación podemos seguir rescatando y cuidando más vidas.</p>
        </div>

        <div className="payment-methods">
            <a href="#" target="_blank" className="payment-card">
                <i className="fa-solid fa-building-columns"></i>
                <span>Transferencia Bancaria</span>
            </a>
            <a href="#" target="_blank" className="payment-card">
                <i className="fa-solid fa-credit-card"></i>
                <span>Tarjeta de Crédito o debito</span>
            </a>
            <a href="#" target="_blank" className="payment-card">
                <i className="fa-brands fa-paypal"></i>
                <span>PayPal</span>
            </a>
            <a href="#" target="_blank" className="payment-card">
                <i className="fa-solid fa-qrcode"></i>
                <span>Código Qr</span>
            </a>
        </div>

        <div className="bank-details-container">
            <div className="bank-info-box">
                <div className="bank-info-text">
                    <p><strong>Número de Cuenta:</strong> 1234567890</p>
                    <p><strong>Tipo de Cuenta:</strong> Ahorros</p>
                    <p><strong>Nombre de la Cuenta:</strong> Fundación Lucky Bienestar Animal</p>
                </div>
                <a href="#" className="btn-primary btn-donate-now">DONAR AHORA</a>
            </div>
            <div className="bank-image-box">
                <img src="https://placedog.net/400/300" alt="Perrito feliz" />
            </div>
        </div>
    </section>
    <Footer />
  </>
  );
}
