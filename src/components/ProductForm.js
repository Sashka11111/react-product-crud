import React, { useEffect, useState } from 'react';

function ProductForm({ productToEdit, onSave }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [price, setPrice] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setTitle(productToEdit.title);
      setBody(productToEdit.body);
      setPrice(productToEdit.price);
      setId(productToEdit.id);
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { title, body, price, id };
    onSave(newProduct);
    setTitle('');
    setBody('');
    setPrice('');
    setId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Body:</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save Product</button>
    </form>
  );
}

export default ProductForm;
