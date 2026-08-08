"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Animal {
    id: string; // Prisma uses String UUID
    name: string;
    species: string;
    breed: string | null;
    age: string | null;
    description: string | null;
    imageUrl: string | null;
    status: string;
    createdAt: string;
}

export default function GestionMascotas() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [animales, setAnimales] = useState<Animal[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        species: '',
        breed: '',
        age: '',
        description: '',
    });
    const [imageBase64, setImageBase64] = useState<string | null>(null);

    // Fetch animals on mount
    useEffect(() => {
        fetchAnimals();
    }, []);

    const fetchAnimals = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/animales');
            const data = await res.json();
            if (res.ok) {
                setAnimales(data);
            } else {
                console.error("Error fetching animals:", data);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ name: '', species: '', breed: '', age: '', description: '' });
        setImageBase64(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const payload = {
            name: formData.name,
            species: formData.species,
            breed: formData.breed,
            age: formData.age,
            description: formData.description,
            imageUrl: imageBase64
        };

        try {
            const res = await fetch('/api/animales', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                closeModal();
                fetchAnimals(); // Refresh list
            } else {
                const errorData = await res.json();
                alert(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Error saving:", error);
            alert("Error de red al guardar.");
        }
    };

    const handleStatusChange = async (id: string, newStatus: string) => {
        try {
            const res = await fetch(`/api/animales/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });

            if (res.ok) {
                // Update local state directly to feel fast
                setAnimales(animales.map(a => a.id === id ? { ...a, status: newStatus } : a));
            } else {
                alert("Error actualizando el estado");
            }
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Error de red al actualizar estado.");
        }
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
                        <h2>Animales en adopción</h2>
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
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <tr><td colSpan={5} style={{ textAlign: 'center', padding: '20px' }}>Cargando...</td></tr>
                                ) : animales.length === 0 ? (
                                    <tr><td colSpan={5} style={{ textAlign: 'center', padding: '20px' }}>No hay animales registrados en la base de datos.</td></tr>
                                ) : (
                                    animales.map((animal) => (
                                        <tr key={animal.id}>
                                            <td>
                                                <img 
                                                    src={animal.imageUrl || 'https://via.placeholder.com/100'} 
                                                    alt={animal.name} 
                                                    className="animal-foto" 
                                                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }}
                                                />
                                            </td>
                                            <td>{animal.name}</td>
                                            <td>{animal.species}</td>
                                            <td>{animal.breed || '-'}</td>
                                            <td>{animal.age || '-'}</td>
                                            <td>
                                                <select 
                                                    value={animal.status} 
                                                    onChange={(e) => handleStatusChange(animal.id, e.target.value)}
                                                    style={{ 
                                                        padding: '4px 8px', 
                                                        borderRadius: '4px',
                                                        border: '1px solid #cbd5e1',
                                                        backgroundColor: animal.status === 'ADOPTADO' ? '#dcfce7' : animal.status === 'PENDIENTE' ? '#fef08a' : '#f1f5f9'
                                                    }}
                                                >
                                                    <option value="DISPONIBLE">Disponible</option>
                                                    <option value="PENDIENTE">Pendiente</option>
                                                    <option value="ADOPTADO">Adoptado</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </main>

                {/* Modal Overlay */}
                <div className={`modal-overlay ${isModalOpen ? 'show' : ''}`} onClick={(e) => { if(e.target === e.currentTarget) closeModal(); }}>
                    <div className="modal-container">
                        <h2>Agregar Animal a la BD</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} placeholder="Ej: Max" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="especie">Especie</label>
                                <select id="especie" value={formData.species} onChange={(e)=>setFormData({...formData, species: e.target.value})} required>
                                    <option value="" disabled>Selecciona una especie</option>
                                    <option value="Perro">Perro</option>
                                    <option value="Gato">Gato</option>
                                    <option value="Conejo">Conejo</option>
                                    <option value="Ave">Ave</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="raza">Raza</label>
                                <input type="text" id="raza" value={formData.breed} onChange={(e)=>setFormData({...formData, breed: e.target.value})} placeholder="Ej: Mestizo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="edad">Edad</label>
                                <input type="text" id="edad" value={formData.age} onChange={(e)=>setFormData({...formData, age: e.target.value})} placeholder="Ej: 2 años" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="foto_simple">Agregar imagen</label>
                                <input type="file" id="foto_simple" accept="image/*" onChange={handleFileChange} />
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
