import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import './global.css';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

const App = () => {
  return(
    <>
    <h1>Nadpis</h1>
    <nav>
        <Link to="/about">About</Link>
        <span> | </span>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet></Outlet>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
    
  },
]);



createRoot(
  document.querySelector('#app'),
).render( <RouterProvider router={router} />);
