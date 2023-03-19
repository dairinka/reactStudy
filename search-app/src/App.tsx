import MainPage from './routes/mainPage';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './routes/aboutPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about_us'} element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
