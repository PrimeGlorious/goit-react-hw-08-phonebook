import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { Audio } from 'react-loader-spinner';
import {
  getContactsList,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/contactOperations';
import { ContactsList } from './ContactList.styled';

function ContactList() {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const deleteContacts = id => {
    dispatch(deleteContact(id));
    dispatch(fetchContacts());
  };

  return (
    <>
      {isLoading && !error && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
        />
      )}

      <ContactsList>
        {!isLoading &&
          filteredContacts().map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteBtn={() => deleteContacts(id)}
            />
          ))}
      </ContactsList>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export { ContactList };
