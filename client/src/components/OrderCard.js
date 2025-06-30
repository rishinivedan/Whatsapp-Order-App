// src/components/OrderCard.js
import React from 'react';

const OrderCard = ({ order, onDelete, onToggle }) => {
  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: order.done ? '#e6ffe6' : '#fff',
        borderLeft: order.done ? '6px solid #4caf50' : '6px solid #ccc'
      }}
    >
      <div style={styles.header}>
        <h2 style={styles.title}>{order.companyName}</h2>
        <label style={styles.toggle}>
          <input
            type="checkbox"
            checked={order.done}
            onChange={() => onToggle(order.id)}
          />
          <span style={styles.toggleLabel}>{order.done ? 'Done' : 'Pending'}</span>
        </label>
      </div>

      <div style={styles.details}>
        <p><strong>Customer:</strong> {order.customerName}</p>
        <p><strong>Code:</strong> {order.code}</p>
        <p><strong>Mesh Size:</strong> {order.meshSize}</p>
        <p><strong>Depth:</strong> {order.depth}</p>
        <p><strong>Selvage:</strong> {order.selvage}</p>
        <p><strong>Color:</strong> {order.color}</p>
        <p><strong>Piece Weight:</strong> {order.pieceWeight}</p>
        <p><strong>Quantity:</strong> {order.quantity}</p>
        <p><strong>Order No:</strong> {order.orderNo}</p>
        <p><strong>Rate:</strong> {order.rate}</p>
        {order.notes && <p><strong>Notes:</strong> {order.notes}</p>}
        <p style={styles.timestamp}>
          <em>{new Date(order.createdAt).toLocaleString()}</em>
        </p>
      </div>

      <button onClick={() => onDelete(order.id)} style={styles.deleteBtn}>
        🗑 Delete
      </button>
    </div>
  );
};

const styles = {
  card: {
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1.5rem',
    transition: 'background 0.3s ease',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
    color: '#333',
  },
  toggle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  toggleLabel: {
    fontSize: '0.9rem',
    color: '#555',
  },
  details: {
    marginTop: '0.5rem',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: '#444',
  },
  deleteBtn: {
    background: '#f44336',
    color: 'white',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '1rem',
    fontSize: '0.9rem',
  },
  timestamp: {
    fontSize: '0.8rem',
    color: '#888',
    marginTop: '0.5rem',
  }
};

export default OrderCard;
