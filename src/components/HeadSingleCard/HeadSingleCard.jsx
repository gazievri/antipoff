import styles from './HeadSingleCard.module.sass';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '../../utils/useMediaQuery';
import PropTypes from 'prop-types';

export const HeadSingleCard = ({ data }) => {
  const { avatar, first_name, last_name } = data;
  const navigate = useNavigate();

  // Определение ширины экрана для планшета
  const isTablet = useMediaQuery('(max-width: 900px)');

  // Обработчик клика по кнопке Назад
  const handleClickBtn = () => {
    navigate(-1);
  };

  return (
    <div className={styles.headSingleCard}>
      {!isTablet ? (
        <button className={styles.btnBack} onClick={() => handleClickBtn()}>
          Назад
        </button>
      ) : (
        <button className={styles.btnTablet} onClick={() => handleClickBtn()} />
      )}

      <img
        src={avatar}
        alt={`Портрет ${first_name} ${last_name}`}
        className={styles.avatar}
      />
      <div className={styles.textBlock}>
        <h1 className={styles.name}>{`${first_name} ${last_name}`}</h1>
        <p className={styles.position}>Партнер</p>
      </div>
    </div>
  );
};

HeadSingleCard.propTypes = {
    data: PropTypes.object,
}
