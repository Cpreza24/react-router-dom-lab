import React from 'react';
import { useState } from 'react';

function MailboxForm() {
  const [name, setName] = useState('');
  const [boxSize, setBoxSize] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit button clicked');
  };

  return (
    <>
      <h1>Mailbox Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='box-owner'>Box Owner</label>
        <input
          type='text'
          placeholder='enter your name'
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='box-size'>Size</label>
        <select
          name='box-size'
          id='box-size'
          placeholder='Small'
          onChange={(e) => setBoxSize(e.target.value)}
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
