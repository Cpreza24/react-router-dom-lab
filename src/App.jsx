import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from '../components/NavBar/NavBar';
import MailboxList from '../components/MailboxList/MailboxList';
import MailboxForm from '../components/MailboxForm/MailboxForm';
import MailboxDetails from '../components/MailboxDetails/MailboxDetails';
import Home from '../components/Home/Home';

const App = () => {
  const [mail, setMail] = useState([]);

  const addMail = (name, boxSize) => {
    const newMail = {
      id: mail.length + 1,
      name,
      boxSize,
    };
    setMail([...mail, newMail]);
  };
  console.log(mail);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mailboxes' element={<MailboxList mail={mail} />} />
        <Route
          path='/new-mailbox'
          element={<MailboxForm addMail={addMail} />}
        />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
      </Routes>
    </>
  );
};

export default App;
