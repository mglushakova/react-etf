import React, { useState, useEffect } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

function TitleForm({ title, editTitle }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(title);
  }, [title]);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTitle(value);
  };
  return (
    <form>
      <MyInput
        value={value || ''}
        onChange={(event) => setValue(event.target.value)}
      />
      <MyButton onClick={handleSubmit} style={{ marginTop: 20 }}>
        Обновить
      </MyButton>
    </form>
  );
}

export default TitleForm;
