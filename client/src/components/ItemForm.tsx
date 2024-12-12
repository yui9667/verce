import { useState } from 'react';
import axios from 'axios';
import './ItemForm.css';
const ItemForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const createItem = async () => {
    try {
      await axios.post('https://verce-server.vercel.app/items', {
        name,
        quantity,
      });
      alert('item created!');
    } catch (error) {
      console.error('Failed to create item:', error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createItem();
      }}
    >
      <h2 className='text-amber-200'>Add Item</h2>
      <div className='container'>
        <div>
          <label>
            Name:{' '}
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Quantity:{' '}
            <input
              type='text'
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
            />
          </label>
          <button type='submit'>Add</button>
        </div>
      </div>
    </form>
  );
};

export default ItemForm;
