import React, { Component } from 'react';

import PropTypes from 'prop-types';
import s from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul>
        {contacts.map(({ name, number }, index) => (
          <li className={s.li} key={index}>
            {name} : {number}
            <button className={s.button} onClick={() => deleteContact(index)}>
              usuń
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
