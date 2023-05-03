import { useState } from 'react';
import styles from './Card.module.sass';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCardData } from '../../store/cardSlice';

export const Card = ({ data }) => {
  const { avatar, first_name, last_name, id } = data;
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Обработчик клика по кнопке Like
  const handleClickLike = (event) => {
    event.stopPropagation();
    setIsLiked(!isLiked);
  };

  // Обработчик клика по карточке (переход на страницу с отдельной карточкой)
  const handleClickCard = () => {
    dispatch(setCardData(data))
    navigate(`/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleClickCard}>
      <img
        src={avatar}
        alt={`Фотография ${first_name} ${last_name}`}
        className={styles.avatar}
      />
      <h2 className={styles.name}>{`${first_name} ${last_name}`}</h2>
      <button
        className={isLiked ? styles.likeBtnLiked : styles.likeBtn}
        onClick={(event) => handleClickLike(event)}
      />
    </div>
  );
};
