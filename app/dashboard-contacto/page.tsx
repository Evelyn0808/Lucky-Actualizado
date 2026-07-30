import Link from 'next/link';
import ContactForm from './ContactForm';
import { getShelterConfig } from '../actions/config';

export default async function DashboardContacto() {
  const config = await getShelterConfig();
  
  return (
    <div className="dashboard-body" style={{ minHeight: '100vh', margin: 0 }}>
        <div className="dashboard-layout">
            
            {/* Left Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <img src="/logo.png" alt="Logo Fundación Lucky" className="sidebar-logo" />
                    <h3>Lucky Bienestar Animal</h3>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><Link href="#">Perfil</Link></li>
                        <li><Link href="#">Mis solicitudes</Link></li>
                        <li><Link href="#">Mis donaciones</Link></li>
                        <li><Link href="#">Mis agendamientos</Link></li>
                        <li><Link href="/dashboard-contacto">Mis mensajes</Link></li>
                        <li><Link href="/iniciar-sesion" className="logout-link">Cerrar sesión</Link></li>
                    </ul>
                </nav>
            </aside>

            {/* Right Main Area */}
            <main className="dashboard-main">
                {/* Top Navigation */}
                <nav className="dashboard-topnav">
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/catalogo">Nuestros animales</Link></li>
                        <li><Link href="/anuncios">Anuncios</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/iniciar-sesion">Iniciar Sesión</Link></li>
                        <li><Link href="/donaciones" className="btn-primary-small">Donar ahora</Link></li>
                    </ul>
                </nav>

                {/* Dashboard Content */}
                <div className="dashboard-content">
                    <h2 className="dashboard-title">Contáctanos</h2>

                    <div className="contact-grid">
                        {/* Card 1: Contact Form */}
                        <div className="contact-card form-card">
                            <form action="#" method="POST" className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" id="nombre" name="nombre" className="orange-input" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="correo">Correo electrónico</label>
                                    <input type="email" id="correo" name="correo" className="orange-input" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="asunto">Asunto</label>
                                    <input type="text" id="asunto" name="asunto" className="orange-input" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea id="mensaje" name="mensaje" rows={5} className="orange-input" required></textarea>
                                </div>
                                <button type="submit" className="btn-orange-submit">Enviar Mensaje</button>
                            </form>
                        </div>

                        {/* Card 2: Contact Info (Now Editable) */}
                        <ContactForm config={config} />
                    </div>
                </div>
            </main>
            
        </div>
    </div>
  );
}
