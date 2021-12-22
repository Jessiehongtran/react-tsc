import React from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import Main from './pages/main';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3'
import './App.css';

const App = () => {
  const mainRoutes = {
    path: '/',
    element: <Main />,
    children: [
      {path: '*', element: <Navigate to='/404'/>},
      {path: '1', element: <Page1 /> },
      {path: '2', element: <Page2 /> },
      {path: '3', element: <Page3 /> },
    ]
  }
  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>
}

export default App;
