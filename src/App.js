import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Landing from './components/Landing/Landing';
import Blog from './components/Blog/Blog';
import Shop from './components/Shop/Shop';
import {useState} from 'react';

function App() {
  const [page, setPage] = useState('landing');

  return (
    <div className="container">
      <Menu onClick={setPage} />
      {page === 'landing' && <Landing />}
      {page === 'blog' && <Blog />}
      {page === 'shop' && <Shop />}
    </div>
  );
}

export default App;
