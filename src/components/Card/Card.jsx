import { useState } from 'react';
import styles from './Card.module.sass';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCardData } from '../../store/cardSlice';
import { setCardsData } from '../../store/cardsSlice';

export const Card = ({ data }) => {
  const { avatar, first_name, last_name, id, liked = false } = data;
  const [isLiked, setIsLiked] = useState(liked);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cards = useSelector((state) => state.cards.data);

  // Обработчик клика по кнопке Like
  const handleClickLike = (event) => {
    event.stopPropagation();
    setIsLiked(!isLiked);
    toggleLikeInStoreData(id);
  };

  // Обработчик клика по карточке (переход на страницу с отдельной карточкой)
  const handleClickCard = () => {
    dispatch(setCardData(data));
    navigate(`/${id}`);
  };

  // Изменяем статус like для карточке в Store и Local Storage
  const toggleLikeInStoreData = (id) => {
    const newCards = cards.map((card) =>
      card.id === id ? { ...card, liked: !isLiked } : card
    );
    dispatch(setCardsData(newCards));
    localStorage.setItem('cards', JSON.stringify(newCards));
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
