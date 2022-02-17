import { FaInstagram, FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';
import LoadSpinner from './loadSpinner';

const Footer = () => {
  return (
    <div className='container'>
      <footer className='mt-3 py-2'>
        <ul className='nav justify-content-center border-top'>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
            <small><small>OCTA</small></small>
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              <FaFacebook />
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
            <FaTwitter />
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
            <FaInstagram />
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
            <FaDiscord />
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
            <small><small>Contact us</small></small>
            </a>
          </li>
        </ul>
        <p className='text-center text-muted'><small><small>Copyright © 2021 OCTA Web, Inc</small></small></p>
        <LoadSpinner />
      </footer>
    </div>
  );
};

export default Footer;
