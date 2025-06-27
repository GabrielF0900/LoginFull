import styles from './styles.module.css';

import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { postAPI } from './fetchAPI';
import { Link, useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const result = await postAPI('/register', formData);
      console.log('Usuário criado:', result);
      alert('Usuário registrado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao registrar:', error);
      alert('Erro ao registrar usuário');
    }
  };

  return (
    <div className={styles.formulario}>
      <h1>Registro</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Registrar</button>

          <p className={styles.linkTexto}>
            Já possui uma conta?
            <Link to="/login" className={styles.linkBotao}>
              Acesse sua conta
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
