import axios from 'axios';

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '5308508e2d940b97454f407eb1289652';

export const GET_WEATHER = (q = 'ho chi minh' ) => {
  return axios
    .get(API_LINK, {
      params: { q: q, lang: 'vi', appid: API_KEY },
    })

};
