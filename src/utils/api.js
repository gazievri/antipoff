import { BASE_URL } from './apiConfig';

export const getCards = () => {
  return fetch(`${BASE_URL}/api/users?page=1&per_page=12`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse)
};

export const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Ошибка ${response.status}`);
};
