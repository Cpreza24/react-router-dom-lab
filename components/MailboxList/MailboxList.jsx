import React, { useState } from 'react';
import MailboxForm from '../MailboxForm/MailboxForm';

function MailboxList({ mail }) {
  return (
    <div>
      <h1>MailBox List</h1>
      <div className='mail-container'>
        {mail.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.boxSize}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MailboxList;
