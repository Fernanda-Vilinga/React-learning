// src/componentes/ItemSelector/ItemSelector.tsx
import React, { useEffect, useState } from 'react';

interface Item {
  id: number;
  name: string;
  selected: boolean;
}

const ItemSeletor: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/items.json');
        const data: Item[] = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleChange = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  return (
    <div className="item-selector">
      <h3>Itens coletados</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.selected}
              onChange={() => handleChange(item.id)}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemSeletor;
