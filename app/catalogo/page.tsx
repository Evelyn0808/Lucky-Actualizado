"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface Animal {
    id: string;
    name: string;
    species: string;
    breed: string | null;
    age: string | null;
    description: string | null;
    imageUrl: string | null;
    status: string;
}

export default function Catalog() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [animales, setAnimales] = useState<Animal[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchAnimals();
    }, []);

    const fetchAnimals = async () => {
        try {
            const res = await fetch('/api/animales');
            if (res.ok) {
                const data = await res.json();
                setAnimales(data);
            }
        } catch (error) {
            console.error("Error fetching animals:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
    <>
      <Navbar />
      <main className="catalog-page">
            {/* Titles */}
            <section className="catalog-header">
                <h1 className="page-title">Nuestros animales en adopción</h1>
                <p className="page-subtitle">Encuentra a tu mejor amigo.</p>
            </section>

            {/* Filter Bar */}
            <section className="filter-section">
                <div className="filter-bar">
                    <div className="filter-tags">
                        <button className="filter-tag active">Todos</button>
                        <button className="filter-tag">Perros</button>
                        <button className="filter-tag">Gatos</button>
                        <button className="filter-tag">Cachorros</button>
                        <button className="filter-tag">Otros</button>
                    </div>
                    <div className="filter-action" style={{ position: 'relative' }}>
                        <button className="btn-filter" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                            Filtros <i className="fa-solid fa-sliders"></i>
                        </button>
                        {/* Dropdown/Modal */}
                        <div className="filter-modal" style={{ display: isFilterOpen ? 'block' : 'none' }}>
                            <h3>Tipo de Animal</h3>
                            <ul>
                                <li><label><input type="checkbox" /> Perros</label></li>
                                <li><label><input type="checkbox" /> Gatos</label></li>
                                <li><label><input type="checkbox" /> Aves</label></li>
                                <li><label><input type="checkbox" /> Conejos</label></li>
                                <li><label><input type="checkbox" /> Roedores</label></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animal Grid */}
            <section className="catalog-grid-wrapper">
                {isLoading ? (
                    <p style={{ textAlign: 'center', width: '100%' }}>Cargando animales...</p>
                ) : animales.length === 0 ? (
                    <p style={{ textAlign: 'center', width: '100%' }}>Aún no hay animales en adopción.</p>
                ) : (
                    <div className="catalog-grid">
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
                                <div className="catalog-info" style={{ padding: '20px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800' }}>{animal.name}</h3>
                                        <span style={{ fontSize: '12px', background: '#fff7ed', color: '#ea580c', padding: '4px 8px', borderRadius: '8px', fontWeight: 'bold' }}>{animal.age || '1 año'}</span>
                                    </div>
                                    <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#64748b', fontWeight: '600' }}>{animal.breed || 'Sin raza'} • {animal.species}</p>
                                    
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                                        <span style={{ fontSize: '12px', color: '#059669', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>🛡️ Salud Al Día</span>
                                        <div className="btn-conocer-mas" style={{ display: 'inline-block', textAlign: 'center', pointerEvents: 'none' }}>
                                            Conocer más 🐾
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </main>
        <Footer />
    </>
    );
}
