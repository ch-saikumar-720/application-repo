import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
  });

  const fetchProducts = async () => {
    const response = await api.get("/api/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    await api.post("/api/products", form);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await api.delete(`/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>E-Commerce Products</h1>

      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />
      <br />

      <input
        placeholder="Price"
        onChange={(e) =>
          setForm({
            ...form,
            price: e.target.value,
          })
        }
      />
      <br />

      <input
        placeholder="Description"
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
      />
      <br />

      <button onClick={addProduct}>Add Product</button>

      <hr />

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.price}</p>
          <p>{p.description}</p>

          <button onClick={() => deleteProduct(p.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
