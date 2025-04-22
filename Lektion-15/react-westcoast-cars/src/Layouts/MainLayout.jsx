import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className='container'>
          {/* Här ska varje komponent renderas... */}
          <Outlet />
        </section>
      </main>
    </>
  );
};
export default MainLayout;
