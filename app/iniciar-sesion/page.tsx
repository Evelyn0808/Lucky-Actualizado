'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        if (data.role === 'ADMIN' || data.role === 'SERVICIOS') {
          router.push('/');
        } else {
          router.push('/');
        }
      } else {
        setError(data.error || 'Error al iniciar sesión');
      }
    } catch (err) {
      setError('Error de red, intenta nuevamente.');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--color-bg-light)' }}>
      {/* Left Column */}
      <div className="login-image-container" style={{ flex: 1, position: 'relative' }}>
         <div style={{ width: '100%', height: '100%', backgroundColor: '#eaeaea', backgroundImage: 'url(https://placedog.net/600/800?id=25)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>

      {/* Right Column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
        <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'var(--color-bg-white)', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)' }}>
          <h2 style={{ marginBottom: '24px', fontSize: '2rem', textAlign: 'center' }}>Iniciar Sesión</h2>
          
          {error && <div style={{ color: 'red', marginBottom: '16px', textAlign: 'center', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: 'var(--radius-md)' }}>{error}</div>}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              style={{ padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #ccc' }}
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              style={{ padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #ccc' }}
            />
            
            <Link href="#" style={{ fontSize: '0.9rem', color: 'var(--color-primary)', textAlign: 'right' }}>
              ¿Olvidaste la contraseña?
            </Link>

            <button type="submit" className="btn-primary" style={{ marginTop: '8px', width: '100%' }}>
              Iniciar sesión
            </button>
          </form>

          <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.9rem' }}>
            ¿No tienes cuenta? <Link href="/registro" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Regístrate</Link>
          </p>
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <Link href="/" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>← Volver al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
