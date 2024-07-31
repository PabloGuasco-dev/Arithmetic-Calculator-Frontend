import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const Operation = () => {
  const { auth } = useAuth();
  const [type, setType] = useState('addition');
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/operations`, { type, amount1, amount2 }, {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      });
      setMessage(`Operation successful: ${response.data.operation_response}`);
    } catch (error) {
      setMessage(`Operation failed: ${error.response.data.error}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>New Operation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Operation Type</label>
          <select id="type" className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="addition">Addition</option>
            <option value="subtraction">Subtraction</option>
            <option value="multiplication">Multiplication</option>
            <option value="division">Division</option>
            <option value="square_root">Square Root</option>
            <option value="random_string">Random String</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="amount1" className="form-label">Amount 1</label>
          <input type="number" className="form-control" id="amount1" value={amount1} onChange={(e) => setAmount1(parseFloat(e.target.value))} />
        </div>
        {type !== 'square_root' && type !== 'random_string' && (
          <div className="mb-3">
            <label htmlFor="amount2" className="form-label">Amount 2</label>
            <input type="number" className="form-control" id="amount2" value={amount2} onChange={(e) => setAmount2(parseFloat(e.target.value))} />
          </div>
        )}
        <button type="submit" className="btn btn-primary">Perform Operation</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
};

export default Operation;
