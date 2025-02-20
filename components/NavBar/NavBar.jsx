import React from 'react';
import { Link } from 'react-router';

function NavBar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/mailboxes'>Mailboxes</Link>
      <Link to='/new-mailbox'>New Mailbox</Link>
    </div>
  );
}

export default NavBar;
