import Image from 'next/image';
import React from 'react';

export default function Hero({ heading, text, backgroundImage }) {
  console.log(backgroundImage);
  return (
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
      <Image
        src={backgroundImage.url}
        height={backgroundImage.height}
        width={backgroundImage.width}
        alt={backgroundImage.alt}
      />
    </div>
  );
}
