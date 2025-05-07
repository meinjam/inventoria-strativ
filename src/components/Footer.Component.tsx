import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-primary text-white py-4'>
      <div className='container'>
        <div className='flex justify-between items-center flex-wrap gap-2'>
          <p>Copyright &copy; {new Date().getFullYear()} Inventoria. All rights reserved</p>
          <p>
            Made with ❤️ by{' '}
            <a
              href='https://injam.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-3 font-bold'
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
