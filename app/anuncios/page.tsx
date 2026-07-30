"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Anuncios() {
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filters = ['Todos', 'Eventos', 'Campañas', 'Urgentes', 'Noticia', 'Voluntariado'];

    const announcements = [
        {
            id: 1,
            title: "Jornada de adopción",
            datetime: "Fecha/Hora y un breve texto",
            category: "Eventos",
            img: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "Campaña de adopción",
            datetime: "Fecha/Hora y un breve texto",
            category: "Campañas",
            img: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "Ayuda para Toby",
            datetime: "Fecha/Hora y un breve texto",
            category: "Urgentes",
            img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80"
        }
    ];

    return (
        <>
            <Navbar />
            <main className="announcements-page">
                {/* Header Section */}
                <section className="announcements-header">
                    <div className="header-content">
                        <h1 className="page-title">Anuncios</h1>
                        <p className="page-subtitle">Entérate de nuestras novedades, eventos y campañas.</p>
                    </div>
                    <div className="header-image">
                        <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80" alt="Mascotas felices" />
                    </div>
                </section>

                {/* Filter Navigation */}
                <section className="announcements-filter">
                    <div className="filter-tabs">
                        {filters.map(filter => (
                            <button 
                                key={filter}
                                className="filter-tag"
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Main Content Layout */}
                <section className="announcements-layout">
                    {/* Left: Main Grid */}
                    <div className="announcements-main">
                        <div className="announcements-grid">
                            {announcements.map(ann => (
                                <div key={ann.id} className="announcement-card">
                                    <div className="img-wrapper">
                                        <img src={ann.img} alt={ann.title} />
                                    </div>
                                    <div className="card-info">
                                        <h3>{ann.title}</h3>
                                        <p>{ann.datetime}</p>
                                        <Link href={`/anuncios/${ann.id}`} className="read-more-link">
                                            ➔ más información
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <aside className="announcements-sidebar">
                        <h3 className="sidebar-title">Anuncios destacados</h3>
                        
                        {/* Urgent Card */}
                        <div className="featured-card urgent-card">
                            <div className="urgent-content">
                                <div className="urgent-text">
                                    <h4>¡Ayuda a Tobby!</h4>
                                    <p>Tu donación puede cambiar su vida</p>
                                </div>
                                <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=200&q=80" alt="Tobby" className="urgent-img" />
                            </div>
                            <Link href="/donaciones" className="btn-primary-block">Donar ahora</Link>
                        </div>

                        {/* Event Card */}
                        <div className="featured-card event-card">
                            <h4>Próximo evento</h4>
                            <div className="event-details">
                                <p>Jornada de adopción</p>
                                <p>sábado 25 de mayo de 2025</p>
                                <p>10:00 AM - 4:00 PM</p>
                                <p className="event-location">PARQUE CENTRAL</p>
                            </div>
                            <Link href="/anuncios/evento-1" className="btn-primary-block">VER MAS DETALLES</Link>
                        </div>
                    </aside>
                </section>


            </main>
            <Footer />
        </>
    );
}
