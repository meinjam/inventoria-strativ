'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ProductImg = ({ images }: { images: string[] }) => {
  const [mainImgSrc, setMainImgSrc] = useState<string>(images[0]);

  const handleChangeSrc = (image: string) => {
    setMainImgSrc(image);
  };

  return (
    <div className='w-full'>
      <div className='relative aspect-square h-full max-h-[300px] w-full overflow-hidden rounded-2xl bg-gray-200 md:max-h-[500px]'>
        <Image
          src={mainImgSrc}
          fill
          priority={true}
          sizes='(min-width: 1024px) 66vw, 100vw'
          className='h-full w-full object-cover'
          alt='product image'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89R8AAtkB6zy+wn8AAAAASUVORK5CYII='
        />
      </div>

      {images.length > 1 && (
        <div className='flex justify-center gap-4 overflow-x-auto py-4'>
          {images.map((image, i) => (
            <Image
              key={i}
              src={image}
              width={80}
              height={80}
              alt={`Thumbnail ${i + 1}`}
              className='size-16 cursor-pointer rounded-md object-cover opacity-60 transition duration-300 hover:opacity-100 sm:size-20'
              onClick={() => handleChangeSrc(image)}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89R8AAtkB6zy+wn8AAAAASUVORK5CYII='
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImg;
