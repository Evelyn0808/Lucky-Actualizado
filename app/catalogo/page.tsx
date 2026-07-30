"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Catalog() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

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
                <div className="catalog-grid">
                    {/* Card 1 */}
                    <Link href="/detail" className="catalog-card">
                        <div className="img-wrapper">
                            <img src="https://placedog.net/400/400?id=1" alt="Max" />
                        </div>
                        <div className="catalog-info">
                            <h3>Max</h3>
                            <p>2 años / Macho</p>
                            <p>Mediano</p>
                        </div>
                    </Link>
                    {/* Card 2 */}
                    <Link href="/detail" className="catalog-card">
                        <div className="img-wrapper">
                            <img src="https://placekitten.com/400/400" alt="Luna" />
                        </div>
                        <div className="catalog-info">
                            <h3>Luna</h3>
                            <p>1 año / Hembra</p>
                            <p>Pequeño</p>
                        </div>
                    </Link>
                    {/* Card 3 */}
                    <Link href="/detail" className="catalog-card">
                        <div className="img-wrapper">
                            <img src="https://placedog.net/400/400?id=2" alt="Mia" />
                        </div>
                        <div className="catalog-info">
                            <h3>Mia</h3>
                            <p>6 meses / Hembra</p>
                            <p>Mediano</p>
                        </div>
                    </Link>
                    {/* Card 4 */}
                    <Link href="/detail" className="catalog-card">
                        <div className="img-wrapper">
                            <img src="https://placekitten.com/401/401" alt="Simba" />
                        </div>
                        <div className="catalog-info">
                            <h3>Simba</h3>
                            <p>3 meses / Macho</p>
                            <p>Pequeño</p>
                        </div>
                    </Link>
                    {/* Card 5 */}
                    <Link href="/detail" className="catalog-card">
                        <div className="img-wrapper">
                            <img src="https://placedog.net/400/400?id=3" alt="Bella" />
                        </div>
                        <div className="catalog-info">
                            <h3>Bella</h3>
                            <p>1.5 años / Hembra</p>
                            <p>Mediano</p>
                        </div>
                    </Link>
                    {/* Card 6 */}
                    <Link href="/detail" className="catalog-card">
                        <div className="img-wrapper">
                            <img src="https://placedog.net/400/400?id=4" alt="Thor" />
                        </div>
                        <div className="catalog-info">
                            <h3>Thor</h3>
                            <p>3 años / Macho</p>
                            <p>Grande</p>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
        <Footer />
    </>
    );
}
