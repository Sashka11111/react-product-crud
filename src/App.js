import React, { useEffect, useState } from 'react';
import './App.css'; // Імпортуємо стилі
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  // Стан для продуктів та для продукту для редагування
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  // Функція для отримання всіх продуктів з API
  const fetchProducts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const productsWithPrice = data.map(product => ({
      ...product,
      price: Math.floor(Math.random() * 100) + 1, // Додаємо випадкову ціну
    }));
    setProducts(productsWithPrice); // Оновлюємо список продуктів
  };

  // Викликаємо fetchProducts при завантаженні компонента
  useEffect(() => {
    fetchProducts();
  }, []);

  // Функція для додавання або редагування продукту
  const handleSave = async (newProduct) => {
    if (productToEdit) {
      // Оновлення існуючого продукту
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productToEdit.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...productToEdit, ...newProduct }),
      });
      const updatedProduct = await response.json();
      setProducts(products.map(product =>
        product.id === productToEdit.id ? updatedProduct : product
      ));
    } else {
      // Додавання нового продукту
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const newProductData = await response.json();
      setProducts([...products, newProductData]);
    }
    setProductToEdit(null); // скидаємо вибраний продукт для редагування
  };

  // Функція для редагування продукту
  const handleEdit = (product) => {
    setProductToEdit(product); // Задаємо продукт для редагування
  };

  // Функція для видалення продукту
  const handleDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    setProducts(products.filter(product => product.id !== id)); // Видаляємо продукт за id
  };

  return (
    <div>
      <h1>Products</h1>
      {/* Форма для створення/редагування продукту */}
      <ProductForm productToEdit={productToEdit} onSave={handleSave} />
      {/* Список продуктів */}
      <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
