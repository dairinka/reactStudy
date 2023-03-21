import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MainPage from './routes/mainPage';
import FormPage from './routes/formPage';
import AboutPage from './routes/aboutPage';
import ErrorPage from './routes/error-page';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<MainPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/about_us" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
