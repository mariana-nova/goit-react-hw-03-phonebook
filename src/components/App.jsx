/* import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.state = {
      contacts: initialContacts,
      filter: '',
    };
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
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
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }), () => {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    });
  };

  deleteContact = (id) => {
    this.setState(
      (prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      }),
      () => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    );
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className='App'>
        <h1 className='Title'>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2 className='form'>Contacts</h2>
        <Filter filter={filter} setFilter={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
 */


import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.state = {
      contacts: initialContacts,
      filter: '',
    };
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
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
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }), () => {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    });
  };

  deleteContact = (id) => {
    this.setState(
      (prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      }),
      () => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    );
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className='App'>
        <h1 className='Title'>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2 className='form'>Contacts</h2>
        <Filter filter={filter} setFilter={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
