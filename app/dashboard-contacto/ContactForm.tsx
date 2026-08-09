"use client";

import { useActionState, useEffect } from "react";
import { updateShelterConfig } from "../actions/config";

// We define a simple interface for the props based on the Prisma model
interface ShelterConfig {
  address: string;
  email: string;
  phone: string;
}

export default function ContactForm({ config }: { config: ShelterConfig }) {
  // In React 19, we use useActionState to handle server actions in forms
  // Since updateShelterConfig doesn't return state, we wrap it
  const updateAction = async (prevState: any, formData: FormData) => {
    await updateShelterConfig(formData);
    return { success: true };
  };

  const [state, formAction, isPending] = useActionState(updateAction, null);

  return (
    <div className="contact-card info-card">
      <h3>Información del contacto</h3>
      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="address"><strong>Dirección:</strong></label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            defaultValue={config.address} 
            className="orange-input" 
            required 
          />
        </div>

        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="email"><strong>Correo:</strong></label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            defaultValue={config.email} 
            className="orange-input" 
            required 
          />
        </div>

        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="phone"><strong>Teléfono:</strong></label>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            defaultValue={config.phone} 
            className="orange-input" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="btn-orange-submit" 
          disabled={isPending}
          style={{ marginTop: '10px' }}
        >
          {isPending ? "Guardando..." : "Guardar cambios"}
        </button>

        {state?.success && (
          <p style={{ color: 'green', fontSize: '0.9rem', textAlign: 'center', margin: 0 }}>
            ¡Cambios guardados con éxito!
          </p>
        )}
      </form>
    </div>
  );
}
