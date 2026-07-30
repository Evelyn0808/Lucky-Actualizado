"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface Animal {
    id: number;
    foto: string;
    nombre: string;
    especie: string;
    raza: string;
    edad: string;
    estado: string;
    statusDot: string;
    visible: boolean;
}

export default function GestionMascotas() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [animales, setAnimales] = useState<Animal[]>([
        { id: 1, foto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&h=100&fit=crop", nombre: "Max", especie: "Gato", raza: "Persa", edad: "2 años", estado: "Disponible", statusDot: "dot-green", visible: true },
        { id: 2, foto: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&h=100&fit=crop", nombre: "Tommy", especie: "Perro", raza: "Labrador", edad: "5 años", estado: "En proceso", statusDot: "dot-yellow", visible: true },
        { id: 3, foto: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=100&h=100&fit=crop", nombre: "Copito", especie: "Conejo", raza: "Cabeza de león", edad: "1 año", estado: "Adoptada", statusDot: "dot-blue", visible: true }
    ]);

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEditName = (id: number, currentName: string) => {
        const newName = prompt("Ingresa el nuevo nombre para el animal:", currentName);
        if (newName && newName.trim() !== "") {
            setAnimales(prev => prev.map(a => a.id === id ? { ...a, nombre: newName.trim() } : a));
        }
    };

    const handleDelete = (id: number) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar a este animal?")) {
            setAnimales(prev => prev.filter(a => a.id !== id));
        }
    };

    const handleToggleVisibility = (id: number) => {
        setAnimales(prev => prev.map(a => a.id === id ? { ...a, visible: !a.visible } : a));
    };

    return (
        <div className="solicitudes-body" style={{ minHeight: '100vh', margin: 0 }}>
            <div className="dashboard-layout">
                {/* Left Sidebar */}
                <aside className="solicitudes-sidebar">
                    <div className="sidebar-header">
                        <img src="/logo.png" alt="Logo Fundación Lucky" className="sidebar-logo" />
                        <h3>Lucky Bienestar Animal</h3>
                    </div>
                    <nav className="sidebar-nav-clean">
                        <ul>
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="/gestion-mascotas">Gestión de mascotas</Link></li>
                            <li><Link href="/solicitudes">Solicitudes de adopciones</Link></li>
                            <li><Link href="#">Gestión de usuarios</Link></li>
                            <li><Link href="/donaciones">Donaciones</Link></li>
                            <li><Link href="/reportes">Reportes</Link></li>
                            <li><Link href="/perfil">Mi perfil</Link></li>
                        </ul>
                    </nav>
                </aside>

                {/* Right Main Column */}
                <main className="solicitudes-main gestion-main">
                    <div className="gestion-header">
                        <h2>Animales</h2>
                        <button onClick={openModal} className="btn-agregar-animal">Agregar Animal</button>
                    </div>

                    <div className="gestion-table-container">
                        <table className="gestion-table">
                            <thead>
                                <tr>
                                    <th>Foto</th>
                                    <th>Nombre</th>
                                    <th>Especie</th>
                                    <th>Raza</th>
                                    <th>Edad</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {animales.map((animal) => (
                                    <tr key={animal.id} style={{ opacity: animal.visible ? 1 : 0.4, transition: 'opacity 0.3s' }}>
                                        <td><img src={animal.foto} alt={animal.nombre} className="animal-foto" /></td>
                                        <td>{animal.nombre}</td>
                                        <td>{animal.especie}</td>
                                        <td>{animal.raza}</td>
                                        <td>{animal.edad}</td>
                                        <td>
                                            <div className="status-indicator">
                                                <span className={`status-dot ${animal.statusDot}`}></span> {animal.estado}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="action-icons">
                                                <i 
                                                    className="fa-solid fa-pencil" 
                                                    onClick={() => handleEditName(animal.id, animal.nombre)} 
                                                    style={{ cursor: 'pointer', color: '#666' }} 
                                                    title="Editar Nombre">
                                                </i>
                                                <i 
                                                    className="fa-solid fa-trash" 
                                                    onClick={() => handleDelete(animal.id)} 
                                                    style={{ cursor: 'pointer', color: '#ff4d4d' }} 
                                                    title="Eliminar">
                                                </i>
                                                <i 
                                                    className={`fa-solid ${animal.visible ? 'fa-eye' : 'fa-eye-slash'}`} 
                                                    onClick={() => handleToggleVisibility(animal.id)} 
                                                    style={{ cursor: 'pointer', color: '#666' }} 
                                                    title={animal.visible ? "Ocultar" : "Mostrar"}>
                                                </i>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {animales.length === 0 && (
                                    <tr>
                                        <td colSpan={7} style={{ textAlign: 'center', padding: '20px' }}>No hay animales registrados.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </main>

                {/* Modal Overlay */}
                <div className={`modal-overlay ${isModalOpen ? 'show' : ''}`} onClick={(e) => { if(e.target === e.currentTarget) closeModal(); }}>
                    <div className="modal-container">
                        <h2>Agregar Animal</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Ej: Max" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="especie">Especie</label>
                                <select id="especie" name="especie" required defaultValue="">
                                    <option value="" disabled>Selecciona una especie</option>
                                    <option value="perro">Perro</option>
                                    <option value="gato">Gato</option>
                                    <option value="conejo">Conejo</option>
                                    <option value="ave">Ave</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="raza">Raza</label>
                                <input type="text" id="raza" name="raza" placeholder="Ej: Mestizo" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="edad">Edad</label>
                                <input type="text" id="edad" name="edad" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="foto_simple">Agregar imagen (máx. 5MB)</label>
                                <input type="file" id="foto_simple" name="foto_simple" accept="image/*" />
                            </div>
                            <div className="modal-actions">
                                <button type="button" className="btn-cancel" onClick={closeModal}>Cancelar</button>
                                <button type="submit" className="btn-submit">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
