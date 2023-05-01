import Link from 'next/link';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';

type Props = {
  images: string[];
  link?: string;
};

export const HomeCarousel = ({ images, link }: Props) => {
  return (
    <div className="w-full h-fit">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={images.length}
        infinite={true}
        isPlaying={true}
        interval={2000}
        touchEnabled={false}
        dragEnabled={false}
      >
        <Slider>
          {images.map((image, index) => (
            <Slide index={index} key={index}>
              <Link href={`/projects/${link}` || ''}>
                <img src={image} className="w-full" />
              </Link>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
};
