import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import axios from 'axios';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/auth/register', {
        name,
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        alert('Cadastro bem-sucedido! Agora faça login.');
        navigate('/login'); 
      } else {
        setError('Erro ao registrar usuário.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Erro ao registrar usuário. Verifique os dados e tente novamente.');
      console.error('Erro no registro:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registrar Usuário</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirmar Senha:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="register-button">Registrar</button>
        <button type="button" onClick={() => navigate('/login')} className="login-button" style={{ marginTop: '10px' }}>
          Já tem uma conta? Faça Login
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
