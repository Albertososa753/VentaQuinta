// src/components/ContactForm.tsx
"use client";

import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const phone = '+5491122334455'; // Reemplazar con el número real

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(
      `Hola, me interesa la quinta publicada.

Nombre: ${name}
Email: ${email}
Mensaje: ${message}`
    );
    const url = `https://wa.me/${phone.replace('+', '')}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.contactBox}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Enviar por WhatsApp</button>
      </form>
    </div>
  );
}