import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Register from './Components/Register';
import Category from './Components/Category';
import Browse from './Components/Browse';
import Movies from './Components/Movies';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />}></Route>
          <Route path='/Category' element={<Category />}></Route>
          <Route path='/Browse' element={<Browse/>}></Route>
          <Route path='/Movies' element={<Movies/>}></Route>
        </Routes>
  </BrowserRouter>
  );
}

export default App;
