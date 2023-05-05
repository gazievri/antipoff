import { Routes, Route } from 'react-router-dom';
import { CardsPage } from '../../pages/CardsPage';
import { CardPage } from '../../pages/CardPage';
import { LoginPage } from '../../pages/LoginPage';
import { SignUpPage } from '../../pages/SIgnUpPage';
import { PrivateRoutes } from '../../components/PrivateRoutes/PrivateRoutes';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<CardsPage />} />
          <Route path="/:id" element={<CardPage />} />
        </Route>
        <Route exact path="/sign-in" element={<LoginPage />} />
        <Route exact path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </main>
  );
};
