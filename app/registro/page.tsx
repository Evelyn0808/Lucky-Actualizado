'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        // Enviar al login
        router.push('/iniciar-sesion?registered=true');
      } else {
        setError(data.error || 'Error al registrar');
      }
    } catch (err) {
      setError('Error de red, intenta nuevamente.');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--color-bg-light)' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
        <div style={{ width: '100%', maxWidth: '450px', backgroundColor: 'var(--color-bg-white)', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)' }}>
          <h2 style={{ marginBottom: '24px', fontSize: '2rem', textAlign: 'center' }}>Crear Cuenta</h2>
          
          {error && <div style={{ color: 'red', marginBottom: '16px', textAlign: 'center', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: 'var(--radius-md)' }}>{error}</div>}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input 
              type="text" 
              placeholder="Nombre completo" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              style={{ padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #ccc' }}
            />
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
             <input 
              type="password" 
              placeholder="Confirmar Contraseña" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
              style={{ padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #ccc' }}
            />

            <button type="submit" className="btn-primary" style={{ marginTop: '16px', width: '100%' }}>
              Registrarme
            </button>
          </form>

          <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.9rem' }}>
            ¿Ya tienes cuenta? <Link href="/iniciar-sesion" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Inicia sesión</Link>
          </p>
           <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <Link href="/" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>← Volver al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
