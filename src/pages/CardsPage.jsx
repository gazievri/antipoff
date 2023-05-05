import { HeadSection } from '../components/HeadSection/HeadSection';
import { HeadCards } from '../components/HeadCards/HeadCards';
import { Cards } from '../components/Cards/Cards';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../utils/useMediaQuery';
import { useSelector } from 'react-redux';

export const CardsPage = () => {
  const cardsData = useSelector((state) => state.cards.data);

  // Массив с данными карточек с сервера
  const [persons, setPersons] = useState(cardsData);
  // Количество карточек для отображения на странице
  const [cardsPerPage, setCardsPerPage] = useState(8);
  // Массив с данными карточек для отображения на странице
  const [personsToRender, setPersonsToRender] = useState([]);
  // Определение статуса Мобильный размер экрана
  const isMobile = useMediaQuery('(max-width: 400px)');
  // Статус для отображения кнопки Показать еще
  const [isBtnHidden, setIsBtnHidden] = useState(false);

  // При загрузки страницы делаем запрос на сервер для получения данных для карточек
  useEffect(() => {
    setPersons(cardsData);
  }, [cardsData]);

  // Определяем ширину экрана и устанавливаем маркер для мобильного телефона
  useEffect(() => {
    if (isMobile) {
      setCardsPerPage(4);
    } else {
      setCardsPerPage(8);
    }
  }, [isMobile]);

  // Определяю массив карточек для отображения на странице в зависимости от того, сколько карточек надо отобразить на странице
  useEffect(() => {
    setPersonsToRender(persons.slice(0, cardsPerPage));
  }, [cardsPerPage, persons]);

  // Меняю статус для кнопки Показать еще если больше нечего добавлять на страницу (все карточки уже отображены)
  useEffect(() => {
    if (cardsPerPage >= persons.length) {
      setIsBtnHidden(true);
    } else {
      setIsBtnHidden(false);
    }
  }, [persons, cardsPerPage]);

  return (
    <>
      <HeadSection>
        <HeadCards />
      </HeadSection>
      <Cards
        data={personsToRender}
        isBtnHidden={isBtnHidden}
        setCardsPerPage={setCardsPerPage}
        cardsPerPage={cardsPerPage}
      />
    </>
  );
};
