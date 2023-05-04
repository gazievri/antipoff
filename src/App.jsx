import './styles/@globals.sass';
import { Main } from './layout/Main/Main';
import { useEffect } from 'react';
import { getCards } from './utils/api';
import { useDispatch } from 'react-redux';
import { setCardsData } from './store/cardsSlice';

function App() {
  const dispatch = useDispatch();

  // При загрузки страницы делаем запрос на сервер для получения данных для карточек
  useEffect(() => {
    getCards()
      .then((res) => {
        dispatch(setCardsData(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
