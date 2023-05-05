import { useDispatch } from 'react-redux';
import styles from './HeadSection.module.sass';
import { setLoggedOut, deleteToken } from '../../store/authSlice';
import { useMediaQuery } from '../../utils/useMediaQuery';

export const HeadSection = (props) => {
  const dispatch = useDispatch();
  // Определение статуса Мобильный размер экрана
  const isTablet = useMediaQuery('(max-width: 900px)');

  // Обработчик кнопки выхода из учетной записи
  const handleClickLogOut = () => {
    //Удаляем статус из LocalStorage
    localStorage.removeItem('logged');
    //Удаляем карточки из LocalStorage
    localStorage.removeItem('cards');
    //Удаляем статус из Store
    dispatch(setLoggedOut());
    //Удаляем Token из Store
    dispatch(deleteToken());
    // //Удаляем Cards из Store
    // dispatch(setCardsData([]));
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {props.children}

        {!isTablet ? (
          <button className={styles.btn} onClick={handleClickLogOut}>
            Выход
          </button>
        ) : (
          <button className={styles.btnTablet} onClick={handleClickLogOut} />
        )}
      </div>
    </section>
  );
};
