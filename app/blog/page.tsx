import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="blog-body" style={{ minHeight: '100vh', margin: 0 }}>
        <main className="blog-main">
            {/* Main Titles */}
            <div className="blog-header">
                <h2>Nuestro Blog</h2>
                <p>Consejos, historias y noticias sobre bienestar animal.</p>
            </div>

            {/* Blog Cards Grid */}
            <div className="blog-container">
                <div className="blog-grid">
                    
                    {/* Card 1 */}
                    <div className="blog-card">
                        <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&h=200&fit=crop" alt="Dog" />
                        <div className="blog-content">
                            <h3>5 consejos para cuidar a tu mascota.</h3>
                            <div className="blog-footer">
                                <span className="blog-date">Fecha</span>
                                <Link href="#" className="blog-link">Leer más</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="blog-card">
                        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop" alt="Cat" />
                        <div className="blog-content">
                            <h3>La importancia de esterilizar a tu mascota.</h3>
                            <div className="blog-footer">
                                <span className="blog-date">Fecha</span>
                                <Link href="#" className="blog-link">Leer más</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="blog-card">
                        <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=300&h=200&fit=crop" alt="Dog and Cat" />
                        <div className="blog-content">
                            <h3>¿Por qué es mejor adoptar que comprar?</h3>
                            <div className="blog-footer">
                                <span className="blog-date">Fecha</span>
                                <Link href="#" className="blog-link">Leer más</Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Action Button */}
                <div className="blog-action">
                    <Link href="#" className="btn-all-articles">Ver todos los artículos</Link>
                </div>
            </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
