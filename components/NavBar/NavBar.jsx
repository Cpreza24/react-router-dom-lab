import React from 'react';
import { Link } from 'react-router';
import './NavBar.css';

function NavBar() {
  return (
    <div className='nav-container'>
      <Link to='/'>Home</Link>
      <Link to='/mailboxes'>Mailboxes</Link>
      <Link to='/new-mailbox'>New Mailbox</Link>
    </div>
  );
}

export default NavBar;
