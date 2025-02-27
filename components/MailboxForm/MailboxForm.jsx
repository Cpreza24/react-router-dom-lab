import React from 'react';
import { useState } from 'react';

function MailboxForm({ addMail }) {
  const [name, setName] = useState('');
  const [boxSize, setBoxSize] = useState('small');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMail(name, boxSize);
    setName('');
    setBoxSize('small');
  };

  return (
    <>
      <h1>Mailbox Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='box-owner'>Box Owner</label>
        <input
          type='text'
          placeholder='enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor='box-size'>Size</label>
        <select
          name='box-size'
          id='box-size'
          placeholder='Small'
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
          required
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
