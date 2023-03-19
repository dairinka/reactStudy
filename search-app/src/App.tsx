import MainPage from './components/mainPage';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './components/aboutPage';
import Header from './components/header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <React.Fragment>
            <Header />
          </React.Fragment>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about_us'} element={<AboutPage />} />
          <Route path={'/not'} element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
