import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './Contacts.styled';

export class Contact extends React.Component {
  NameId = nanoid();
  NumberId = nanoid();

  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.NameId}>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={this.NumberId}>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}
Contact.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
};
