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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path='/film/' element={<Film />} />
            <Route path='/film/:id' element={<FilmDetail />} />
            <Route path='/category/:categoryName' element={<CategoryDetail />} />
            <Route path='/category' element={<Category />} />
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
