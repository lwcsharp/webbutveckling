import './navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='container'>
          <ul className='menu'>
            <li className='logo'>
              <img src='/react-logo-small.png' alt='' />
              <a href='/'>Westcoast Cars</a>
            </li>
            <li className='toggle'>
              <input className='menu-btn' type='checkbox' id='menu-btn' />
              <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
              </label>
            </li>
            <li className='menu-item'>
              <a className='active' href='/'>
                Start
              </a>
            </li>
            <li className='menu-item'>
              <a href='/gallery'>Våra bilar</a>
            </li>
            <li className='menu-item'>
              <a href='/about'>Om Oss</a>
            </li>
            <li className='menu-item'>
              <a href='/contact'>Kontakta Oss</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
