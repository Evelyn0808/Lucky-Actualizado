import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { prisma } from '../lib/prisma';

export default async function Home() {
  const animales = await prisma.animal.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' }
  });

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

      {/* Categories Row (Infinite Carousel) */}
      <section className="categories-section">
          <div className="categories-carousel">
              <div className="categories-track">
                  {/* Original Items */}
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
                  {/* Duplicated Items */}
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
              </div>
          </div>
      </section>

      {/* Adoption Grid */}
      <section className="adoption-section">
          <h2 className="section-title">Animales en adopción</h2>
          <div className="adoption-grid">
              {animales.map((animal) => (
                  <Link key={animal.id} href={`/catalogo/${animal.id}`} className="catalog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="img-wrapper" style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                          <img 
                              src={animal.imageUrl || 'https://via.placeholder.com/400'} 
                              alt={animal.name} 
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          {animal.status === 'ADOPTADO' && (
                              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <span style={{ transform: 'rotate(-15deg)', background: '#22c55e', color: 'white', padding: '8px 16px', borderRadius: '24px', fontSize: '18px', fontWeight: '900', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', border: '2px solid white' }}>
                                      🎉 ¡Felizmente Adoptado!
                                  </span>
                              </div>
                          )}
                          {animal.status === 'PENDIENTE' && (
                              <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#fef08a', color: '#854d0e', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                  ⏳ En proceso de adopción
                              </span>
                          )}
                          <span className="badge-tag" style={{ position: 'absolute', bottom: '12px', left: '12px', background: '#ea580c', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>📍 Quito Centro</span>
                      </div>
                      <div className="catalog-info" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800' }}>{animal.name}</h3>
                              <span style={{ fontSize: '12px', background: '#fff7ed', color: '#ea580c', padding: '4px 8px', borderRadius: '8px', fontWeight: 'bold' }}>{animal.age || '1 año'}</span>
                          </div>
                          <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#64748b', fontWeight: '600' }}>{animal.breed || 'Sin raza'} • {animal.species}</p>
                          
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                              <span style={{ fontSize: '12px', color: '#059669', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>🛡️ Salud Al Día</span>
                              <div className="btn-conocer-mas" style={{ display: 'inline-block', textAlign: 'center', pointerEvents: 'none', background: '#ea580c', color: '#ffffff', padding: '8px 16px', borderRadius: '10px', fontWeight: 'bold', fontSize: '12px' }}>
                                  Conocer más 🐾
                              </div>
                          </div>
                      </div>
                  </Link>
              ))}
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
