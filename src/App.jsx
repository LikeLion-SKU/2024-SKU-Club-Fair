import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/About';
import Booth from './pages/Booth';
import HomePage from './pages/HomePage';
import DongariIntro from './pages/DongariIntro';
import DongariDetail from './pages/DongariDetail';
import DongariTotal from './pages/DongariTotal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/intro',
    element: <DongariIntro />,
  },
  {
    path: '/intro/:dongari',
    element: <DongariTotal />,
  },
  {
    path: '/intro/:id',
    element: <DongariDetail />,
  },
  {
    path: '/booth',
    element: <Booth />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;