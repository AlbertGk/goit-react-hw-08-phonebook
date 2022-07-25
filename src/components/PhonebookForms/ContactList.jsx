import styles from '../../Styles/PageStyles.module.css';

export const ContactList = ({ contacts, filter, deletionHandler }) => {
  console.log('contacts', contacts.items);
  return (
    <ul className={styles.contact__list}>
      {{ filter } === ''
        ? contacts.items.map(contact => (
            <li key={contact.id} className={styles.contact__listItem}>
              {contact.name}: {contact.number}
              <button type="button" onClick={() => deletionHandler(contact.id)}>
                Delete
              </button>
            </li>
          ))
        : contacts.items
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => (
              <li key={contact.id} className={styles.contact__listItem}>
                {contact.name}: {contact.number}
                <button
                  className={styles.input__button}
                  type="button"
                  onClick={() => deletionHandler(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))}
    </ul>
  );
};
