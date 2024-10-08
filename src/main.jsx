import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeroSection from './components/HeroSection.jsx';
import Game1 from './components/Games1/Game1.jsx';
import Game2 from './components/Games2/Game2.jsx';

const router = createBrowserRouter([
  {
    path:'',
    element:<App/>,
    children:[
      {
        path:"",
        element:<HeroSection/>
      },
      {
        path:"/game1",
        element:<Game1/> 
      },
      {
        path:"game2",
        element:<Game2/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
