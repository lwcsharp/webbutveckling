import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import HomePage from './pages/Home/HomePage';
import GalleryPage from './pages/Gallery/Gallery';
import VehiclePage from './pages/Gallery/VehiclePage';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

// Skapa navigeringstabellen.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/gallery' element={<GalleryPage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/vehicles/:id' element={<VehiclePage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
