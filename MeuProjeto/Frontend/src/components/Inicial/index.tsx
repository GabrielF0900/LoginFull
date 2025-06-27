import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogout } from './fetchAPI'; // Ajuste para sua função de logout
import styles from './styles.module.css'; // Ajuste para seus estilos

export function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const messages = [
    "Bem-vindo ao sistema!",
    "Você tem 3 notificações novas.",
    "Não esqueça de atualizar seu perfil."
  ];
  const today = new Date().toLocaleDateString();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token') || '';
      await fetchLogout(token, {} as string);  // Passa o token para a API de logout
      localStorage.removeItem('token');
      localStorage.removeItem('userName'); // Remover também o nome
      alert('Logout realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      alert('Erro ao sair da conta.');
    }
  };

  return (
    <div>
      <header>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </header>

      <main>
        <h1>Olá, {userName}!</h1>
        <p>Data de hoje: {today}</p>

        <section>
          <h2>Notificações</h2>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
