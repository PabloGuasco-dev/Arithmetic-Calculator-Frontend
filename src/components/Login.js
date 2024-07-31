import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Spinner, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import styles from './Login.module.css'; 

const Login = () => {
  const { setAuth } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, { username, password });
      setAuth(response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid username or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Card className={styles.loginCard}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" /> Logging in...
                </>
              ) : (
                'Login'
              )}
            </Button>
            <Button variant="secondary" className="w-100" onClick={() => navigate('/register')} disabled={loading}>
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
