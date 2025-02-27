import React, { useState } from 'react';
import { Link } from 'react-router';
import MailboxForm from '../MailboxForm/MailboxForm';

function MailboxList({ mail }) {
  return (
    <div>
      <h1>MailBox List</h1>
      <div className='mail-container'>
        {mail.map((item, index) => (
          <div key={index}>
            <h2>
              <Link to={`/mailboxes/${item.id}`}>{item.name} </Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MailboxList;
