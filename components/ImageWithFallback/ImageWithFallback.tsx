import Image, { ImageProps } from "next/future/image";
import React, { useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

export const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, alt, ...restProps } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...restProps}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};
