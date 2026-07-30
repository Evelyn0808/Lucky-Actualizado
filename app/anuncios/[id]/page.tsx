"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// Placeholder dynamic data
const announcement = {
    id: "toby",
    title: "Urgente!!",
    description: "Texto corto de lo que necesita el perrito.",
    date: "[Fecha de publicación]",
    category: "[Categoría de urgente]",
    img: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=500&q=80"
};

const relatedAnnouncements = [
    {
        id: "luna",
        tag: "Urgente",
        title: "Ayuda para Luna",
        shortText: "Texto corto",
        img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=200&q=80"
    },
    {
        id: "campana",
        tag: "Campaña",
        title: "Esteriliza, salva vidas",
        shortText: "Texto corto",
        img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=200&q=80"
    }
];

export default function AnnouncementDetail() {
    return (
        <>
            <Navbar />
            
            <main className="announcement-detail-page">
                {/* Breadcrumbs Banner */}
                <section className="breadcrumb-banner">
                    <p className="breadcrumbs">
                        Inicio {'>'} Anuncios {'>'} Ayuda para Toby
                    </p>
                    <Link href="/anuncios" className="back-link">
                        ← Volver a anuncios
                    </Link>
                </section>

                {/* Main Content Area (Gray Background) */}
                <section className="detail-content-area">
                    <div className="detail-layout">
                        
                        {/* Left / Main Column */}
                        <div className="detail-main">
                            <div className="detail-header-block">
                                <img src={announcement.img} alt="Toby" className="detail-main-img" />
                                <div className="detail-header-info">
                                    <h1 className="detail-title">{announcement.title}</h1>
                                    <p className="detail-desc">{announcement.description}</p>
                                    
                                    <div className="detail-metadata">
                                        <div className="meta-item">
                                            <span className="meta-label">Fecha de publicación:</span>
                                            <span className="meta-value">{announcement.date}</span>
                                        </div>
                                        <div className="meta-item">
                                            <span className="meta-label">Categoría:</span>
                                            <span className="meta-value">{announcement.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="help-section-block">
                                <h2>¿Cómo puedes ayudar a Toby?</h2>
                                <p className="help-subtitle">Cada aporte, por pequeño que sea, hace la diferencia.</p>
                                
                                <div className="help-cards-grid">
                                    {/* Card: Dona */}
                                    <div className="help-action-card bg-white">
                                        <h3>Dona</h3>
                                        <p>Tu donación ayudará a cubrir los gastos de la cirugía.</p>
                                        <Link href="/donaciones" className="btn-primary-block">Dona Ahora</Link>
                                    </div>

                                    {/* Card: Apadrina */}
                                    <div className="help-action-card bg-white">
                                        <h3>Apadrina</h3>
                                        <p>Conviértete en padrino y ayúdanos con la alimentación, cuidado y recuperación de Toby.</p>
                                        <Link href="/anuncios/apadrina" className="btn-primary-block">Mas Información</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Right Column / Sidebar */}
                        <aside className="detail-sidebar">
                            <h3 className="sidebar-title">Anuncios relacionados</h3>
                            
                            <div className="related-list">
                                {relatedAnnouncements.map((item) => (
                                    <div key={item.id} className="related-card bg-white">
                                        <img src={item.img} alt={item.title} className="related-img" />
                                        <div className="related-info">
                                            <span className="related-tag">{item.tag}</span>
                                            <h4>{item.title}</h4>
                                            <p>{item.shortText}</p>
                                            <Link href={`/anuncios/${item.id}`} className="read-more-link">
                                                → más información
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Consolidated Donation Panel */}
                            <div className="consolidated-donation-panel">
                                <h3>Tu donación cambia vidas.</h3>
                                <p>Con tu ayuda podemos seguir rescatando, cuidando y brindando una mejor vida a los animales.</p>
                                <div className="donation-panel-img-wrapper">
                                    <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=400&q=80" alt="Happy Beagle" className="donation-panel-img" />
                                </div>
                                <div className="donation-panel-btn-wrapper">
                                    <Link href="/donaciones" className="btn-donation-panel">Dona Ahora</Link>
                                </div>
                            </div>
                        </aside>

                    </div>
                </section>
            </main>
            
            <Footer />
        </>
    );
}
