import React, { useEffect, useState } from 'react';

import ForeCast from '../ForeCast/ForeCast';
import Search from '../Search/Search';
import { GET_WEATHER } from '../../api';
import Toast from '../Toast/Toast';

export default function WeatherContainer({ background, setBackground }) {
  const [searchValue, setSearchValue] = useState('Hồ Chí Minh');
  const [searchResult, setSearchResult] = useState(null);
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    GET_WEATHER().then((res) => setSearchResult(res.data));
  }, []);

  useEffect(() => {
    if (searchResult && searchResult.main.temp - 273.15 < 22) {
      setBackground('./images/cold.png');
    } else {
      setBackground('./images/hot.png');
    }
  }, [searchResult]);

  const handleFetchWeather = (e) => {
    if (e.code === 'Enter' && searchValue) {
      GET_WEATHER(searchValue.trim())
        .then((res) => {
          setSearchResult(res.data);
        })
        .catch((err) => showHideNotif());
      e.target.blur();
    }
    if (e.code === 'Enter' && !searchValue) {
      return alert('Vui Lòng Nhập Tên Thành Phố!');
    }
  };

  const showHideNotif = () => {
    setShowNotif(true);
    setTimeout(() => {
      setShowNotif(false);
    }, 700);
  };
  return (
    <div
      style={{
        position: 'relative',
        minWidth: '450px',
        height: '600px',
        padding: '30px 20px',
        margin: '0 auto',
        background: `url(${background}) center center / cover no-repeat`,
        borderRadius: '10px',
      }}
    >
      <Search setSearchValue={setSearchValue} searchValue={searchValue} handleFetchWeather={handleFetchWeather} />
      <ForeCast searchResult={searchResult} />
      {showNotif ? <Toast /> : null}
    </div>
  );
}
