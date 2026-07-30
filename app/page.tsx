import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="hero">
          <div className="hero-content">
              <h1>Dale una segunda oportunidad...</h1>
              <p>Miles de animales están esperando un hogar lleno de amor. Únete a nuestra comunidad y cambia una vida hoy mismo. Tu ayuda hace la diferencia.</p>
              <div className="hero-buttons">
                  <Link href="/catalogo" className="btn-primary large">Adoptar Ahora</Link>
              </div>
          </div>
          <div className="hero-images">
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Perro feliz" className="hero-img-1" />
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Gato curioso" className="hero-img-2" />
          </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
          <div className="story-image">
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Nuestra Historia" />
          </div>
          <div className="story-content">
              <h2>Nuestra Historia</h2>
              <p>Comenzamos con un pequeño sueño: asegurar que cada animal tenga el amor y cuidado que merece. Hoy,
                  gracias a personas como tú, hemos rescatado a cientos de amigos peludos.</p>
              <Link href="/historias" className="btn-primary">Leer Más</Link>
          </div>
      </section>

      {/* Categories Row */}
      <section className="categories">
          <div className="category-item">
              <div className="cat-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Perros" />
              </div>
              <span>Perros</span>
          </div>
          <div className="category-item">
              <div className="cat-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Gatos" />
              </div>
              <span>Gatos</span>
          </div>
          <div className="category-item">
              <div className="cat-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Gatitos" />
              </div>
              <span>Gatitos</span>
          </div>
          <div className="category-item">
              <div className="cat-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Cachorros" />
              </div>
              <span>Cachorros</span>
          </div>
          <div className="category-item">
              <div className="cat-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1425082661705-1834bfd0999c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Otros Animales" />
              </div>
              <span>Otros Animales</span>
          </div>
      </section>

      {/* Adoption Grid */}
      <section className="adoption-section">
          <h2 className="section-title">Animales en adopción</h2>
          <div className="adoption-grid">
              {/* Card 1 */}
              <div className="pet-card">
                  <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Max" />
                  <div className="pet-info">
                      <h3>Max</h3>
                      <div className="pet-meta">
                          <span>2 años</span> | <span>Macho</span> | <span>Mediano</span>
                      </div>
                      <p className="pet-desc">Juguetón y lleno de energía. Ideal para familias activas.</p>
                  </div>
              </div>
              {/* Card 2 */}
              <div className="pet-card">
                  <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Luna" />
                  <div className="pet-info">
                      <h3>Luna</h3>
                      <div className="pet-meta">
                          <span>1 año</span> | <span>Hembra</span> | <span>Pequeño</span>
                      </div>
                      <p className="pet-desc">Muy cariñosa y tranquila. Le encanta dormir al sol.</p>
                  </div>
              </div>
              {/* Card 3 */}
              <div className="pet-card">
                  <img src="https://images.unsplash.com/photo-1537151608804-ea6f23c344ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Rocky" />
                  <div className="pet-info">
                      <h3>Rocky</h3>
                      <div className="pet-meta">
                          <span>4 años</span> | <span>Macho</span> | <span>Grande</span>
                      </div>
                      <p className="pet-desc">Protector y leal. Un excelente compañero de aventuras.</p>
                  </div>
              </div>
              {/* Card 4 */}
              <div className="pet-card">
                  <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Mia" />
                  <div className="pet-info">
                      <h3>Mia</h3>
                      <div className="pet-meta">
                          <span>6 meses</span> | <span>Hembra</span> | <span>Mediano</span>
                      </div>
                      <p className="pet-desc">Curiosa y divertida. Lista para descubrir el mundo contigo.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Highlighted Categories */}
      <section className="highlighted-categories">
          <div className="highlight-block dogs-block">
              <div className="highlight-overlay">
                  <h2>Perritos</h2>
                  <Link href="/catalogo" className="btn-primary">VER MAS</Link>
              </div>
          </div>
          <div className="highlight-block cats-block">
              <div className="highlight-overlay">
                  <h2>Gatitos</h2>
                  <Link href="/catalogo" className="btn-primary">VER MAS</Link>
              </div>
          </div>
      </section>

      {/* Help Section */}
      <section className="help-section">
          <h2 className="section-title">Como puedes ayudar</h2>
          <div className="help-grid">
              <Link href="/catalogo" className="help-card">
                  <div className="help-icon"><i className="fa-solid fa-house-chimney-window"></i></div>
                  <h3>Adoptar</h3>
                  <p>Dale un hogar definitivo a un animal que lo necesita.</p>
              </Link>
              <Link href="/apadrinar" className="help-card">
                  <div className="help-icon"><i className="fa-solid fa-hand-holding-heart"></i></div>
                  <h3>Apadrinar</h3>
                  <p>Apoya mensualmente a uno de nuestros residentes.</p>
              </Link>
              <Link href="/donaciones" className="help-card">
                  <div className="help-icon"><i className="fa-solid fa-sack-dollar"></i></div>
                  <h3>Donar dinero</h3>
                  <p>Tu contribución ayuda a cubrir gastos médicos y alimento.</p>
              </Link>
          </div>
      </section>
      <Footer />
    </>
  );
}
