import styles from './Cards.module.sass';
import { Card } from '../Card/Card';

export const Cards = ({ data, isBtnHidden, setCardsPerPage, cardsPerPage }) => {
  const handleClickShowElse = () => {
    setCardsPerPage(cardsPerPage + 4);
  };

  return (
    <section className={styles.cards}>
      <div className={styles.list}>
        {data.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>

      {!isBtnHidden && (
        <button className={styles.btn} onClick={handleClickShowElse}>
          Показать еще <div className={styles.btnArrow} />
        </button>
      )}
    </section>
  );
};
