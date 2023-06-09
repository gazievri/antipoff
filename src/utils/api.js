import { BASE_URL } from './apiConfig';

// Проверка ответа сервера
export const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Ошибка ${response.status}`);
};

// Запросить все карточки с бэка
export const getCards = () => {
  return fetch(`${BASE_URL}/api/users?page=1&per_page=12`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};

// Запросить карточку конкретного пользователя (не используется в проекте)
export const getUser = (id) => {
  return fetch(`${BASE_URL}/api/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};

//Регистрация нового пользователя
export const registerUser = (email, password) => {
  return fetch(`${BASE_URL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

//Авторизация пользователя
export const login = (email, password) => {
  return fetch(`${BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};
