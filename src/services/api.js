const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const deleteProduct = async (id) => {
  return await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
