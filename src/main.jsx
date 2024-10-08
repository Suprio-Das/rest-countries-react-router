import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/countries',
        loader: () => fetch('https://restcountries.com/v3.1/all'),
        element: <Countries></Countries>
      },
      {
        path: '/country/:official',
        loader: ({ params }) => fetch(`https://restcountries.com/v3.1/name/${params.official}`),
        element: <CountryDetails></CountryDetails>
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
