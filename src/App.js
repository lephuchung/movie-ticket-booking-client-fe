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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className='main-container'>
            <Routes>
              <Route path='/film/' element={<Film />} />
              <Route path='/film/:title' element={<FilmDetail />} />
              <Route path='/category/:genre' element={<CategoryDetail />} />
              <Route path='/category' element={<Category />} />
              <Route path='/booking' element={<Booking />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/login' element={<Login />} />
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
