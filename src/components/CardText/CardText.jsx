import styles from './CardText.module.sass';
import PropTypes from 'prop-types';
import { PARAGRAPHS } from '../../utils/constants';

export const CardText = ({ email }) => {
  return (
    <section className={styles.cardText}>
      <div className={styles.paragraphs}>
        {PARAGRAPHS.map((p) => (
          <p key={p.id}>{p.text}</p>
        ))}
      </div>
      <div className={styles.contacts}>
        <a
          href="tel:+79201311214"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <div className={styles.phoneIcon} />
          <span>+7 (920) 131-12-14</span>
        </a>

        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <div className={styles.envelopeIcon} />
          <span>{email}</span>
        </a>
      </div>
    </section>
  );
};

CardText.propTypes = {
  email: PropTypes.string,
}
