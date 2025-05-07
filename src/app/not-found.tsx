import Image from 'next/image';
import Link from 'next/link';
import NotFoundImage from '@/assets/img/404.svg';

export default function NotFound() {
  return (
    <section className='my-20'>
      <div className='container'>
        <div className='text-center'>
          <Image src={NotFoundImage} width={400} height={400} className='block mx-auto mb-14' alt='404 image' />
          <h2 className='text-3xl font-bold uppercase mb-8'>Page Not Found</h2>
          <p className='text-xl mb-10'>
            The page you are looking for might have been removed had its name changed or it&apos;s temporarily
            unavailable.
          </p>

          <Link href='/' className='btn'>
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
