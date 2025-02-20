import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from '../components/NavBar/NavBar';
import MailboxList from '../components/MailboxList/MailboxList';
import MailboxForm from '../components/MailboxForm/MailboxForm';
import MailboxDetails from '../components/MailboxDetails/MailboxDetails';
import Home from '../components/Home/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mailboxes' element={<MailboxList />} />
        <Route path='/new-mailbox' element={<MailboxForm />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
      </Routes>
    </>
  );
};

export default App;
