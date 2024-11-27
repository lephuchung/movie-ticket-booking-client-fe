import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './page/Home/Home';
import FilmDetail from './page/FilmDetail/FilmDetail';
import Film from './page/Film/Film';
import CategoryDetail from './page/CategoryDetail/CategoryDetail';
import Category from './page/Category/Category';
import Booking from './page/Booking/Booking';
import NotFound from './page/NotFound/NotFound';
import Profile from './page/Profile/Profile';
import Footer from './component/Footer/Footer';
import Login from './page/Login/Login';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar isAuth={isAuth} />
          <div className='main-container'>
            <Routes>
              <Route path='/film/' element={<Film />} />
              <Route path='/film/:title' element={<FilmDetail isAuth={isAuth} />} />
              <Route path='/category/:categoryName' element={<CategoryDetail />} />
              <Route path='/category' element={<Category />} />
              <Route path='/booking' element={<Booking isAuth={isAuth} />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/login' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
