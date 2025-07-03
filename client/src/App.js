// src/App.js
import React, { useEffect, useState } from 'react';
import OrderCard from './components/OrderCard';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔗 Use your hosted Render backend directly
  const BASE_URL = 'https://whatsapp-order-app-lgw9.onrender.com';

  const fetchOrders = () => {
    fetch(`${BASE_URL}/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const deleteOrder = (id) => {
    fetch(`${BASE_URL}/orders/${id}`, { method: 'DELETE' })
      .then(() => fetchOrders());
  };

  const toggleDone = (id) => {
    fetch(`${BASE_URL}/orders/${id}/toggle`, {
      method: 'PUT'
    }).then(() => fetchOrders());
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📦 WhatsApp Orders</h1>
      {loading ? (
        <p>Loading...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onDelete={deleteOrder}
            onToggle={toggleDone}
          />
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '1rem',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
};

export default App;
