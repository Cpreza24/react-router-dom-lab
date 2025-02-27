import React from 'react';
import { useParams } from 'react-router-dom';
import './MailboxDetails.css';

function MailboxDetails({ mail }) {
  const { mailboxId } = useParams();
  const mailbox = mail.find((item) => item.id === Number(mailboxId));

  if (!mailbox) {
    return <h2>Mailbox Not Found</h2>;
  }

  return (
    <div className='details-container'>
      <h1>Mailbox Details</h1>
      <div className='detail-items-container'>
        <h2>Box Owner: {mailbox.name}</h2>
        <p>Box ID: {mailbox.id}</p>
        <p>Size: {mailbox.boxSize}</p>
      </div>
    </div>
  );
}

export default MailboxDetails;
