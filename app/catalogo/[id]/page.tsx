import React from 'react';
import { prisma } from '../../../lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default async function AnimalDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    // Fetch directly from DB since it's a Server Component
    const animal = await prisma.animal.findUnique({
        where: { id }
    });

    if (!animal) {
        return notFound();
    }

    const whatsappNumber = "593991234567"; // Placeholder, can be updated later
    const message = encodeURIComponent(`¡Hola Fundación Lucky! 🐾 Me encantó ${animal.name} y me gustaría agendar una cita para conocerlo(a).`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <>
            <Navbar />
            <main className="animal-detail-page">
                <div className="detail-container">
                    <Link href="/catalogo" className="btn-back">
                        &larr; Volver al catálogo
                    </Link>

                    <div className="detail-grid">
                        <div className="detail-image-wrapper">
                            <img 
                                src={animal.imageUrl || 'https://via.placeholder.com/600'} 
                                alt={animal.name}
                                className="detail-image"
                                style={{ borderRadius: '20px', maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                            />
                            
                            {/* Galería de Fotos Adicionales */}
                            <div className="detail-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '16px' }}>
                                <img 
                                    src={animal.species.toLowerCase().includes('gato') ? 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400' : 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400'} 
                                    alt={`${animal.name} jugando`} 
                                    className="gallery-thumb"
                                />
                                <img 
                                    src={animal.species.toLowerCase().includes('gato') ? 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=400' : 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400'} 
                                    alt={`${animal.name} durmiendo`} 
                                    className="gallery-thumb"
                                />
                            </div>
                        </div>

                        <div className="detail-info">
                            <div className="detail-header">
                                <span className="detail-status">🐾 En Adopción</span>
                                <h1 className="detail-title">{animal.name}</h1>
                                <p className="detail-subtitle">{animal.breed || 'Sin raza'} • {animal.species}</p>
                            </div>

                            <div className="detail-badges">
                                <div className="detail-badge">
                                    <span>🎂 {animal.age || 'Edad desconocida'}</span>
                                </div>
                                <div className="detail-badge health">
                                    <span>🛡️ Salud al Día</span>
                                </div>
                                <div className="detail-badge">
                                    <span>📍 Quito Centro</span>
                                </div>
                            </div>

                            <div className="detail-description">
                                <h2>Sobre {animal.name}</h2>
                                <p>{animal.description || 'Una mascota encantadora lista para encontrar un hogar lleno de amor. Es ideal para compañía y largos paseos.'}</p>
                            </div>

                            <div className="detail-cta-box">
                                <h3>¿Listo para darle un hogar?</h3>
                                <p>Agenda una cita para venir a conocer a {animal.name} en persona. El proceso es rápido y seguro.</p>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                                    Agendar Cita en WhatsApp 💬
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
