import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-primary py-4 text-white'>
      <div className='container'>
        <div className='flex flex-wrap items-center justify-between gap-2'>
          <p>Copyright &copy; {new Date().getFullYear()} Inventoria. All rights reserved</p>
          <p>
            Made with ❤️ by{' '}
            <a
              href='https://injam.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-bold underline underline-offset-3'
            >
              Injamamul Haque
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
