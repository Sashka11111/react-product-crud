import React from 'react';
import './../App.css'; // Імпортуємо CSS файл
import deleteIcon from './../assets/delete.png';
import editIcon from './../assets/edit.png';

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
              <button onClick={() => onEdit(product)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                <img src={editIcon} alt="Edit" style={{ width: '24px', height: '24px' }} />
              </button>

              <button onClick={() => onDelete(product.id)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                <img src={deleteIcon} alt="Delete" style={{ width: '24px', height: '24px' }} />
              </button>

            </td>
          </tr>
        ))}
      </tbody>
    </table >
  );
}

export default ProductList;
