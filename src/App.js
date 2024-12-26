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
import { ToastContainer } from 'react-toastify';
import Payment from './page/Payment/Payment';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(!!localStorage.getItem("token"));
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer
          progressClassName="toastProgress"
          bodyClassName="toastBody"
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <header className="App-header">
          <Navbar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
          <div className='main-container'>
            <Routes>
              <Route path='/film/' element={<Film />} />
              <Route path='/film/:title' element={<FilmDetail />} />
              <Route path='/category/:genre' element={<CategoryDetail />} />
              <Route path='/category' element={<Category />} />
              <Route path='/booking' element={<Booking />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/payment/:encodedData' element={<Payment />} />
              <Route path='/login' element={<Login setIsSignedIn={setIsSignedIn} />} />
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
