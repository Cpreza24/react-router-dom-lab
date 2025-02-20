import React from 'react';

function MailboxForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit button clicked');
  };

  return (
    <>
      <h1>Mailbox Form</h1>
      <form action=''>
        <label htmlFor='box-owner'>Box Owner</label>
        <input type='text' />
        <label htmlFor='box-size'>Size</label>
        <select name='box-size' id='box-size'>
          <option value='sm'>Small</option>
          <option value='md'>Medium</option>
          <option value='lg'>Large</option>
        </select>
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default MailboxForm;
