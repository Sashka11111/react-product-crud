import React from 'react';
import './../App.css'; // Імпортуємо CSS файл

function ProductList({ products, onEdit, onDelete }) {
  return (
    <table border="1" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.body}</td>
            <td>{product.price}</td>
            <td>
              <button onClick={() => onEdit(product)} style={{ marginRight: '10px' }}>Edit</button>
              <button onClick={() => onDelete(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
