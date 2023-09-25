import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Landing from './components/Landing/Landing';
import Blog from './components/Blog/Blog';
import Shop from './components/Shop/Shop';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {selectType} from './store/selectors';

function App() {
  const page = useSelector(selectType);

  return (
    <div className="container">
      <Menu />
      {page === 'landing' && <Landing />}
      {page === 'blog' && <Blog />}
      {page === 'shop' && <Shop />}
    </div>
  );
}

export default App;
