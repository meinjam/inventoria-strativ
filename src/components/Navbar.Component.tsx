import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-primary py-4 text-white'>
      <div className='container'>
        <h2>
          <Link href='/' className='text-3xl font-bold'>
            Inventoria
          </Link>
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
