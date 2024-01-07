import axios from 'axios';
import { SERVER_BASE_URL } from 'shared/const/common';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  },
});
