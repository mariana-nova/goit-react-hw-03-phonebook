import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import './App.css';

const App = () => {
  // Leer los contactos almacenados en el localStorage al cargar la aplicación
  const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  // Guardar los contactos en el localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert('Contact already exists!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='App'>
      <h1 className='Title'>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2 className='form'>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
