import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const UserRecords = () => {
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/records?page=${page}&perPage=${perPage}&search=${search}`, {
          headers: {
            Authorization: `Bearer ${auth}`
          }
        });
        setRecords(response.data.records);
      } catch (error) {
        console.error('Failed to fetch records', error);
        setError('Failed to fetch records');
      } finally {
        setLoading(false);
      }
    };

    if (auth) {
      fetchRecords();
    }
  }, [page, perPage, search, auth]);

  return (
    <div className="container mt-5">
      <h2>User Records</h2>
      <div className="mb-3">
        <label htmlFor="search" className="form-label">Search</label>
        <input 
          type="text" 
          className="form-control" 
          id="search" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      {loading && <div>Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Operation</th>
                <th>Amount</th>
                <th>User Balance</th>
                <th>Response</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {records.map(record => (
                <tr key={record.id}>
                  <td>{record.operation_id.type}</td> {}
                  <td>{record.amount}</td>
                  <td>{record.user_balance}</td>
                  <td>{record.operation_response}</td>
                  <td>{new Date(record.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
            <button className="btn btn-primary" onClick={() => setPage(prev => prev + 1)}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserRecords;
