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
                            <Link key={animal.id} href={`/detail?id=${animal.id}`} className="catalog-card">
                                <div className="img-wrapper">
                                    <img 
                                        src={animal.imageUrl || 'https://via.placeholder.com/400'} 
                                        alt={animal.name} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="catalog-info">
                                    <h3>{animal.name}</h3>
                                    <p>{animal.age || 'Edad desconocida'} / {animal.species}</p>
                                    <p>{animal.breed || 'Sin raza'}</p>
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
