import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Newbie from './components/Challenges/Newbie/Newbie'
import Junior from './components/Challenges/Junior/Junior'
import Intermediate from './components/Challenges/Intermediate/Intermediate'
import Advanced from './components/Challenges/Advanced/Advanced'
import Guru from './components/Challenges/Guru/Guru'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/newbie",
    element: <Newbie />,
  },
  {
    path: "/junior",
    element: <Junior />,
  },
  {
    path: "/intermediate",
    element: <Intermediate />,
  },
  {
    path: "/advanced",
    element: <Advanced />,
  },
  {
    path: "/guru",
    element: <Guru />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
