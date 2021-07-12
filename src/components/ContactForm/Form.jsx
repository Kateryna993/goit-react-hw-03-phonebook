import React, { Component } from 'react';
import styles from './Form.module.css';
import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  phoneInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.ContactForm}>
        <label className={styles.formLabel} htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={styles.formInput}
          value={this.state.name}
          onChange={this.handleChange}
          id={this.nameInputId}
        />
        <label className={styles.formLabel} htmlFor={this.phoneInputId}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={styles.formInput}
          value={this.state.number}
          onChange={this.handleChange}
          id={this.phoneInputId}
        />
        <button className={styles.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default ContactForm;
