import './styles/@globals.sass';
import { Main } from './layout/Main/Main';
import { useEffect, useState } from 'react';
import { getCards } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setCardsData } from './store/cardsSlice';
import { setLoggedIn } from './store/authSlice';

function App() {
  const dispatch = useDispatch();
  const [isLogged] = useState(localStorage.getItem('logged') ? localStorage.getItem('logged') : false);
  const [cards, setCards] = useState(
    localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : []
  );

  const setStatusLogged = () => {
    if (isLogged) dispatch(setLoggedIn());
  };

  setStatusLogged();

  // При загрузкe страницы проверяем есть ли данные с карточками в LocalStorage. 
  // Если нет, то делаем запрос на бэк. Если есть, то используем данные из LocalStorage.
  useEffect(() => {
    if (cards.length === 0) {
      getCards()
        .then((res) => {
          localStorage.setItem('cards', JSON.stringify(res.data));
          dispatch(setCardsData(res.data));
          setCards(res.data)
        })
        .catch((err) => console.log(err));
    } else {
      dispatch(setCardsData(cards));
    }
  }, []);


  return (
    <>
      <Main />
    </>
  );
}

export default App;
