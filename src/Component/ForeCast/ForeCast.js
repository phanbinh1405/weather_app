import React from 'react';

import './forecast.css';

export default function ForeCast({ searchResult }) {
  const date = new Date().toLocaleString('vi')
  return (
    <React.Fragment>
      {searchResult ? (
        <div className='container d-flex flex-column align-items-center'>
          <h1 className='text-center text-white' style={{ textShadow: ' 2px 2px rgb(0 0 0 / 50%)', maxWidth: '250px' }}>
            {searchResult.name}
          </h1>
          <p className='time text-center text-white'>{date}</p>
          <div className='temperature text-center text-white'>
            <span className='value'>{(searchResult.main.temp - 273.15).toFixed(0)} </span>
            <span>
              <sup>o</sup>C
            </span>
          </div>
          <div className='description text-center text-white'>{searchResult.weather[0].main}</div>
          <div className='more-desc text-white d-flex justify-content-between w-100'>
            <div className='visibility d-flex flex-column align-items-center'>
              <span>Tầm nhìn</span>
              <p className='mb-0 mt-2'>{searchResult.visibility}(m)</p>
            </div>
            <div className='visibility d-flex flex-column align-items-center'>
              <span>Tốc độ gió</span>
              <p className='mb-0 mt-2'>{searchResult.wind.speed} m/s</p>
            </div>
            <div className='visibility d-flex flex-column align-items-center'>
              <span>Độ ẩm</span>
              <p className='mb-0 mt-2'>{searchResult.main.humidity}(%)</p>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
