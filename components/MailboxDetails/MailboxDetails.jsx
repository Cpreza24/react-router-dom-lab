import React from 'react';
import { useParams } from 'react-router-dom';

function MailboxDetails({ mail }) {
  const { mailboxId } = useParams();
  const mailbox = mail.find((item) => item.id === Number(mailboxId));

  if (!mailbox) {
    return <h2>Mailbox Not Found</h2>;
  }

  return (
    <div>
      <h1>Mailbox Details</h1>
      <h2>Box Owner: {mailbox.name}</h2>
      <p>Box ID: {mailbox.id}</p>
      <p>Size: {mailbox.boxSize}</p>
    </div>
  );
}

export default MailboxDetails;
