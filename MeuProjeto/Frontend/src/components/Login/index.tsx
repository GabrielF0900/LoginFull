import React from 'react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from './fetchAPI';
import styles from './styles.module.css';

export function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetchLogin(formData.email, formData.password);

      // ✅ Salva token e nome do usuário
      localStorage.setItem('token', response.token);
      localStorage.setItem('userName', response.user.name); // <- Aqui está a alteração

      alert(`Login realizado com sucesso! Bem-vindo, ${response.user.name}`);
      navigate('/home');
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <div>
      <h1 className={styles.h1}>Login</h1>

      <form className={styles.formulario} onSubmit={handleSubmit}>
        <div className={styles.div}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.div}>
          <label htmlFor="password" className={styles.label}>Senha:</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.button}>Entrar</button>
      </form>

      <p className={styles.linkTexto}>
        Não tem conta?
        <span
          className={styles.linkBotao}
          onClick={() => navigate('/register')}
          role="button"
          tabIndex={0}
          onKeyPress={e => {
            if (e.key === 'Enter' || e.key === ' ') navigate('/register');
          }}
        >
          Registre-se aqui
        </span>
      </p>
    </div>
  );
}
