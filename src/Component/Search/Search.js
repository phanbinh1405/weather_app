import React from 'react';

import './search.css';

export default function Search({ setSearchValue, handleFetchWeather, searchValue }) {
  return (
    <div className='mb-3 search_input'>
      <input
        type='text'
        className='form-control'
        value={searchValue}
        placeholder={'Nhập tên thành phố'}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => handleFetchWeather(e)}
        onFocus={(e) => (e.target.value = '')}
      />
    </div>
  );
}
