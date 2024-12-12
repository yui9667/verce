import { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemList.css';
type Item = {
  _id: string;
  name: string;
  quantity: number;
};

const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const fetchItems = async () => {
    try {
      const response = await axios.get('https://verce-server.vercel.app/items');
      setItems(response.data);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await axios.delete(`https://verce-server.vercel.app/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Failed to delete items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div>
      <h2>Items</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => deleteItem(item._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
