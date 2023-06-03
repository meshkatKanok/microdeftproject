import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { RouterProvider } from 'react-router-dom';
import { router } from './Component/Router/Router';
import Searching from './Component/Searching.js/Searching';
import Home from './Component/Home/Home';

function App() {
  return (
    <div>
      <RouterProvider router={router}>
      <Home/>
      </RouterProvider>
     
      
    </div>
  );
}

export default App;
