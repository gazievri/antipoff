import {Routes, Route} from 'react-router-dom'
import { CardsPage } from '../../pages/CardsPage'
import { CardPage } from '../../pages/CardPage';
import { LoginPage } from '../../pages/LoginPage';
import { SignUpPage } from '../../pages/SIgnUpPage';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route exact path="/:id" element={<CardPage />} />
        <Route exact path="/sign-in" element={<LoginPage />} />
        <Route exact path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </main>
  );
};
