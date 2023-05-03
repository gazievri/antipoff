import {Routes, Route} from 'react-router-dom'
import { CardsPage } from '../../pages/CardsPage'
import { CardPage } from '../../pages/CardPage';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route exact path="/:id" element={<CardPage />} />
        {/* <Route exact path="/offerta" element={<Offerta />} /> */}
      </Routes>
    </main>
  );
};
