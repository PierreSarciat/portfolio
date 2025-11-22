import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
/*import Home from '@pages/home.jsx';
import FicheLogement from '@pages/fiche-logements.jsx';
import Erreur from '@pages/page-erreur.jsx';
import Apropos from '@pages/Apropos.jsx';*/



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
   
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}


