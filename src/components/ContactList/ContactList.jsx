import React from 'react';
import propTypes from 'prop-types';

import { ListUl, ListLi, BtnDelete } from './ContactList.styled';
import { MdOutlineContactPhone } from 'react-icons/md';

export const ContactList = ({ contacts, deleteContact }) => (
  <ListUl>
    {contacts.map((contact, id) => (
      <ListLi key={id}>
        <MdOutlineContactPhone />
        {contact.name}: {contact.number}
        <BtnDelete type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </BtnDelete>
      </ListLi>
    ))}
  </ListUl>
);
ContactList.propTypes = {
  deleteContact: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
