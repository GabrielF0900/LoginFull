// fetchAPI.ts

const BASE_URL = 'http://localhost:3000'; // Porta do backend

export const fetchLogout = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      // Se o status for 401 ou outro erro, lança erro personalizado
      const errorData = await response.json();
      throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
    }

    // Retorna os dados do login (ex: token, user, etc)
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição de login:', error);
    throw error;
  }
};
