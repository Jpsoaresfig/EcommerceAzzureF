import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8081/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login bem-sucedido!', data);

        if (data && data.token) {
          localStorage.setItem('authToken', data.token);
          navigate('/products');
        } else {
          setError('Resposta da API incompleta: token não encontrado.');
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Credenciais inválidas ou erro no servidor.');
        console.error('Erro no login:', response.status, errorData);
      }
    } catch (apiError) {
      setError('Erro de conexão com o servidor. Verifique se o backend está rodando.');
      console.error('Erro na requisição da API:', apiError);
    }
  };

  const handleRegister = async () => {
    setError('');
    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password, role: 'USER' }),
      });

      if (response.ok) {
        alert('Usuário registrado com sucesso! Agora você pode fazer login.');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao registrar usuário.');
      }
    } catch (apiError) {
      setError('Erro de conexão ao registrar.');
    }
  };

  return (
    <div className="login-container">
      <img src="./azzure.png" alt="Logo Azzure" className="logo" />
      <h2>Azzure</h2>
      <p className="login-title">Login</p>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Entrar</button>
        <button type="button" onClick={handleRegister} className="register-button" style={{ marginTop: '10px' }}>
          Registrar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
