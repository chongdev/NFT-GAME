import Link from 'next/link';
import Image from 'next/image';

import NavItem from './NavItem';

const Header = () => {
  return (
    <header className='p-3 bg-dark text-white fixed-top'>


      
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          {/* <a
            href='#'
            className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
          >
            LOGO
          </a> */}

          <nav className="navbar navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                <Image src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
              </a>
            </div>
          </nav>

          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <NavItem to='/airdrop'>Airdrop</NavItem>
            </li>
            <li>
              <NavItem to='/myinventory'>My Inventory</NavItem>
            </li>
            <li>
              <NavItem to='/marketplace'>Marketplace</NavItem>
            </li>
          </ul>

          <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'>
            <input
              type='search'
              className='form-control form-control-dark'
              placeholder='Search...'
              aria-label='Search'
            />
          </form>

          <div className='text-end'>
            <button type='button' className='btn btn-outline-light me-2'>
              Login
            </button>
            <button type='button' className='btn btn-warning'>
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;