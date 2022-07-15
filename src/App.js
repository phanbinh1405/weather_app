import { useState } from 'react';
import WeatherContainer from './Component/WeatherContainer/WeatherContainer';

function App() {
  const [background, setBackground] = useState('./images/hot.png');

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{
        height: '100vh',
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(${background}) center center / cover no-repeat`,
      }}
    >
      <WeatherContainer background={background} setBackground={setBackground} />
    </div>
  );
}

export default App;
