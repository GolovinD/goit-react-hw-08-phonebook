import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // const filteredOutContacts = getContactsData();

  // function getContactsData() {
  //   const standarValue = filter.toLowerCase();
  //   return contacts.items.filter(contact =>
  //     contact.name.toLowerCase().includes(standarValue)
  //   );
  // }

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.form}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
