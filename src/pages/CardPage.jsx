import { HeadSection } from '../components/HeadSection/HeadSection';
import { HeadSingleCard } from '../components/HeadSingleCard/HeadSingleCard';
import { useSelector } from 'react-redux';

export const CardPage = () => {
  const cardData = useSelector((state) => state.card.data);
  console.log(cardData);
  return (
    <>
      <HeadSection>
        <HeadSingleCard data={cardData} />
      </HeadSection>
    </>
  );
};
