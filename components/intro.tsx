import Link from 'next/link';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Button } from './Button';
import { HomeCarousel } from './HomeCarousel';
import { HomeLink } from './HomeLink';

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
      <div className="mt-12">
        <Button>REDES SOCIALES</Button>
      </div>

      <div className="sm:flex w-full gap-3 mt-12">
        <HomeCarousel images={['/logosimonimo.png', '/logosimonimo.png', '/logosimonimo.png']} />
        <HomeCarousel images={['/logosimonimo.png', '/logosimonimo.png', '/logosimonimo.png']} />
      </div>

      <div className="mt-8">
        <HomeLink href="/projects">See All projects</HomeLink>
      </div>

      <h2 className="text-6xl font-medium text-center mt-5">
        Otra agencia de <span className="bg-[#ff0]">mi____*</span> que se creen innovadores
      </h2>

      <div className="mt-12">
        <Button>SPOTS</Button>
      </div>

      <div className="sm:flex w-full gap-3 mt-12">
        <HomeCarousel images={['/logosimonimo.png', '/logosimonimo.png', '/logosimonimo.png']} />
        <HomeCarousel images={['/logosimonimo.png', '/logosimonimo.png', '/logosimonimo.png']} />
      </div>

      <div className="mt-8">
        <HomeLink href="/projects">See All projects</HomeLink>
      </div>

      <p className="text-6xl font-medium text-center mt-16">🔥 Sí somos Simonim@s 🔥</p>
      <p style={{ color: '#d53d40' }} className="text-4xl font-medium text-center mt-16">
        SIMONIM@S
      </p>
    </section>
  );
}
