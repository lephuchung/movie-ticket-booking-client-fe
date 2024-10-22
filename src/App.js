import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import FilmDetail from './component/FilmDetail/FilmDetail';
import Film from './component/Film/Film';
import CategoryDetail from './component/CategoryDetail/CategoryDetail';
import Category from './component/Category/Category';
import Booking from './component/Booking/Booking';
import NotFound from './component/NotFound/NotFound';
import BookingFilm from './component/BookingFilm/BookingFilm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <Routes>            
            <Route path='/film/' element={<Film />} />
            <Route path='/film/:id' element={<FilmDetail />} />
            <Route path='/category/:categoryName' element={<CategoryDetail />} />
            <Route path='/category' element={<Category />} />
            <Route path='/booking/:film' element={<BookingFilm />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
