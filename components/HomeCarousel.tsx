import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';

export const HomeCarousel = ({ images }) => {
  return (
    <div className="w-full h-fit">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={3}
        infinite={true}
        isPlaying={true}
        interval={2000}
        touchEnabled={false}
        dragEnabled={false}
      >
        <Slider>
          {images.map((image, index) => (
            <Slide index={index}>
              <img src={image} />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
};
