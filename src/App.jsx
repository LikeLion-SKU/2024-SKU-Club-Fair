import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/About';
import Booth from './pages/Booth';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import DongariIntro from './pages/schedule';
import DongariDetail from './pages/DongariDetail';
import DongariTotal from './pages/DongariTotal';
import Schedule from './pages/schedule';
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
    path: '/schedule',
    element: <Schedule />,
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
