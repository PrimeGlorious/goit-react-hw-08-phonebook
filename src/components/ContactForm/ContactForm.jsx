import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsList } from 'redux/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Input, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import {
  fetchContacts,
  addContact,
} from '../../redux/contactOperations';
import { PhonebookForm, PhonebookLabel, PhonebookSection, PhonebookTitle } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContacts = async (name, number) => {
    const allNames = contacts.map(contact => contact.name);
    const currentName = name;
    const currentNumber = number;
    if (!allNames.includes(currentName)) {
      await dispatch(
        addContact({
          name: currentName,
          number: currentNumber,
        })
      );
      dispatch(fetchContacts());
    } else {
      alert(`${currentName} already added!  `);
    }
  };

  const inputValue = evt => {
    const key = evt.target.name;
    const value = evt.target.value;

    switch (key) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    const currentName = evt.target.elements.name.value;
    const currentNumber = evt.target.elements.number.value;
    addContacts(currentName, currentNumber);
    setName('');
    setNumber('');
  };

  return (
    <PhonebookSection>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <PhonebookForm onSubmit={onSubmitForm}>
        <PhonebookLabel>
          Name
          <Input
            width="100%"
            onChange={inputValue}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </PhonebookLabel>
        <PhonebookLabel>
          Number
          <Input
            width="100%"
            value={number}
            onChange={inputValue}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </PhonebookLabel>
        <Button
          colorScheme="linear-gradient(to right, #00b4db, #0083b0);"
          type="submit"
        >
          Add contact
        </Button>
      </PhonebookForm>
      <Filter />
      <ContactList />
    </PhonebookSection>
  );
}

export { ContactForm };
