import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  const handleNameChange = event => {
    console.log(event.target.value);
    setName(event.target.value);
    console.log(name);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContacts(name, number);
    console.log(name);

    if (name === '' || number === '') {
      return;
    }

    function addContacts(name, phone) {
      console.log(name);
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(`${name} is already in contacts.`);
        return false;
      }

      const newContact = {
        name,
        phone,
      };

      console.log(newContact);

      dispatch(addContact(newContact));
    }

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            value={number}
            onChange={handleNumberChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="btn" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
