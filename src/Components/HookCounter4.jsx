import React, { useState } from 'react';

function HookCounter4() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }]);
  };

  return (
    React.createElement('div', null,
      React.createElement('button', { onClick: addItem }, 'Add Item'),
      React.createElement('ul', null,
        items.map(item => React.createElement('li', { key: item.id }, `${item.id},${item.value}`))
      )
    )
  );
}

export default HookCounter4;
