import React from 'react';
import { useState } from 'react';

function MailboxForm() {
  const [name, setName] = useState('');
  const [boxSize, setBoxSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit button clicked');
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h1>Mailbox Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='box-owner'>Box Owner</label>
        <input
          type='text'
          placeholder='enter your name'
          onChange={handleChange}
        />
        <label htmlFor='box-size'>Size</label>
        <select
          name='box-size'
          id='box-size'
          placeholder='Small'
          onChange={handleChange}
        >
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default MailboxForm;
