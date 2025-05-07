'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import DummyImage from '@/assets/img/dummy-image.jpg';

const CustomImage = ({ src }: { src: string }) => {
  const [imgSrc, setImgSrc] = useState(src || DummyImage?.src);

  return (
    <Image
      src={imgSrc}
      alt={'Product image'}
      width={40}
      height={40}
      className='rounded-full size-10'
      placeholder='blur'
      blurDataURL={imgSrc}
      priority
      onError={() => setImgSrc('/dummy-image.jpg')}
    />
  );
};

export default CustomImage;
