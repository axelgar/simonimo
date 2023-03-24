import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mt-32 mb-16 md:mb-12">
      <img src="/logosimonimo.png" width={330} className="block" />
      <h1 className="text-6xl font-medium text-center mt-7">
        Por fin te has dado cuenta que ya no tiene sentido que te lleve las redes sociales{' '}
        <span style={{ color: '#d53d40' }}>tu primo Paco </span>y te has puesto a buscar agencias.
      </h1>
      <h2 className="text-6xl font-medium text-center bg-[#ff0]">
        ¿Te gustaría saber qué nos diferencia de los otros?*
      </h2>
      <p style={{ color: '#d53d40' }} className="text-2xl font-medium mt-8">
        *Sigue navegando y verás.
      </p>
      <button className="border-2 border-black rounded-full px-4 py-1 text-3xl font-medium mt-12">
        REDES SOCIALES
      </button>

      <div className="flex w-full gap-3 mt-12">
        <div className="w-full flex-grow">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            infinite={true}
            isPlaying={true}
            interval={2000}
          >
            <Slider>
              <Slide index={0}>
                <img src="/logosimonimo.png" />
              </Slide>
              <Slide index={1}>
                <img src="/logosimonimo.png" />
              </Slide>
              <Slide index={2}>
                <img src="/logosimonimo.png" />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
        <div className="w-full">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            infinite={true}
            isPlaying={true}
            interval={2000}
          >
            <Slider>
              <Slide index={0}>
                <img src="/logosimonimo.png" />
              </Slide>
              <Slide index={1}>
                <img src="/logosimonimo.png" />
              </Slide>
              <Slide index={2}>
                <img src="/logosimonimo.png" />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </section>
  );
}
