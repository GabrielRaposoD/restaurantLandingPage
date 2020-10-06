import { FaFacebookF, FaTwitter, FaTripadvisor, FaBars } from 'react-icons/fa';

export function Header() {
  return (
    <section className='fixed top-0 z-50 flex flex-col w-full text-white'>
      <div className='bg-gradient-to-r from-primary-500 to-primary-600 w-full h-1' />
      <div className='lg:justify-around lg:px-0 flex flex-row justify-between w-full px-6 pt-4'>
        <img src='img/logo.png' alt='' className='h-24' />
        <div className='lg:flex flex-row items-center hidden space-x-10 font-medium'>
          <a
            href='#'
            className='hover:text-primary-500 transition-all duration-200 ease-in-out'
          >
            HOME
          </a>
          <a
            href='#'
            className='hover:text-primary-500 transition-all duration-200 ease-in-out'
          >
            MENU
          </a>
          <a
            href='#'
            className='hover:text-primary-500 transition-all duration-200 ease-in-out'
          >
            RESERVATION
          </a>
          <a
            href='#'
            className='hover:text-primary-500 transition-all duration-200 ease-in-out'
          >
            GALLERY
          </a>
          <a
            href='#'
            className='hover:text-primary-500 transition-all duration-200 ease-in-out'
          >
            ABOUT
          </a>
          <a
            href='#'
            className='hover:text-primary-500 transition-all duration-200 ease-in-out'
          >
            BLOG
          </a>
          <a
            href='#'
            className='hover:text-primary-500 transition-all duration-200 ease-in-out'
          >
            CONTACT
          </a>
        </div>
        <div className=' flex flex-row items-center space-x-6'>
          <a href='#'>
            <FaTripadvisor className='hover:text-primary-500 md:flex hidden text-2xl transition-all duration-200 ease-in-out' />
          </a>
          <a href='a'>
            <FaFacebookF className='hover:text-primary-500 md:flex hidden text-2xl transition-all duration-200 ease-in-out' />
          </a>
          <a href='#'>
            <FaTwitter className='hover:text-primary-500 md:flex hidden text-2xl transition-all duration-200 ease-in-out' />
          </a>
          <FaBars className=' md:hidden text-3xl' />
        </div>
      </div>
    </section>
  );
}
