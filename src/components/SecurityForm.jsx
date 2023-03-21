import React, { useState, useEffect } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

function SecurityForm({ addSecurity }) {
  const [name, setName] = useState('');
  const [cost, setCost] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <label htmlFor="ticker" className="input-label">
        Тикер
      </label>
      <MyInput
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="ticker"
      />
      <label htmlFor="cost" className="input-label">
        Стоимость
      </label>
      <MyInput
        value={cost}
        onChange={(event) => setCost(event.target.value)}
        id="cost"
      />
      <MyButton onClick={handleSubmit} style={{ marginTop: 20 }}>
        Добавить
      </MyButton>
    </form>
  );
}

export default SecurityForm;
