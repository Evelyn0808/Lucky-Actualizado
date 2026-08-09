import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="main-header">
        <div className="logo">
            <img src="/logo.png" alt="Logo Fundación Lucky" className="logo-header" />
            <h2>Fundación Lucky Bienestar Animal</h2>
        </div>
        <nav className="main-nav">
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/catalogo">Nuestros animales</Link></li>
                <li><Link href="/anuncios">Anuncios</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/dashboard-contacto">Contacto</Link></li>
            </ul>
        </nav>
        <div className="header-actions">
            <Link href="/iniciar-sesion" className="btn-text">Iniciar Sesión</Link>
            <Link href="/donaciones" className="btn-primary">Donar Ahora</Link>
        </div>
    </header>
  );
}
