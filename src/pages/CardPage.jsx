import { HeadSection } from '../components/HeadSection/HeadSection';
import { HeadSingleCard } from '../components/HeadSingleCard/HeadSingleCard';
import { CardText } from '../components/CardText/CardText';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const CardPage = () => {
  const { pathname } = useLocation();

  const [cardData, setCardData] = useState(
    useSelector((state) => state.card.data)
  );
  const cardsData = useSelector((state) => state.cards.data);

  // Нахожу данные карточки по id для отображения данных при перезагрузки страницы
  useEffect(() => {
    if (cardsData.length > 0) {
      const id = pathname.split('/')[1];
      const card = cardsData.filter((el) => el.id == id)[0];
      setCardData(card);
    }
  }, [cardsData, pathname]);

  return (
    <>
      <>
        <HeadSection>
          <HeadSingleCard data={cardData} />
        </HeadSection>
        <CardText email={cardData.email} />
      </>
    </>
  );
};
