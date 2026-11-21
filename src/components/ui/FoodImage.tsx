import Image from 'next/image';
import type { ImageProps } from 'next/image';

const responsiveSources: Record<string, readonly number[]> = {
  '/images/food/catering-feast.jpg': [480, 640, 960, 1376],
  '/images/food/craft-spices.jpg': [480, 640, 960, 1376],
  '/images/food/cuisine-chinese.jpg': [480, 640, 960, 1376],
  '/images/food/cuisine-south.jpg': [480, 640, 960, 1376],
  '/images/food/cuisine-starters.jpg': [480, 640, 800],
  '/images/food/hero-biryani.jpg': [480, 640, 960, 1200],
  '/images/food/location-tellapur.jpg': [480, 640, 960, 1376],
  '/images/food/signature-biryani.jpg': [480, 640, 960, 1200],
  '/images/food/signature-chicken.jpg': [480, 640, 960, 1376],
  '/images/food/signature-dal.jpg': [480, 640, 960, 1200],
  '/images/food/signature-paneer.jpg': [480, 640, 960, 1200],
};

type FoodImageProps = Omit<ImageProps, 'src'> & { src: string };

export default function FoodImage({
  src,
  sizes,
  alt,
  ...imageProps
}: FoodImageProps) {
  const widths = responsiveSources[src];

  if (!widths) {
    throw new Error(`Missing responsive image sources for ${src}`);
  }

  const basePath = src.slice(0, -4);
  const srcSet = widths
    .map((width) => `${basePath}-${width}.webp ${width}w`)
    .join(', ');

  return (
    <picture>
      <source srcSet={srcSet} sizes={sizes} type="image/webp" />
      <Image src={src} sizes={sizes} alt={alt} {...imageProps} />
    </picture>
  );
}
