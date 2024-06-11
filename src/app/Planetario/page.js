import Image from 'next/image';
import Navbar from '../../../components/navbar';
import s from '../../../static/css/planetas.module.css';
export const metadata = {
  title: 'Planetas y estrellas',
};
export default function planetas() {
  return (
    <main>
      <>
        <Navbar />
      </>
      <h2 className={s.title}> GALERÍA DE PLANETAS Y ESTRELLAS</h2>
      <div className={s.galeria}>
        <div className={s.galeritem}>
          <Image
            src='/static/img/earth_galaxy.png'
            alt='earth'
            width={200}
            height={200}
          />
        </div>
        <div className={s.galeritem}>
          <Image
            src='/static/img/galaxy-planets-solar.png'
            alt='earth'
            width={200}
            height={200}
          />
        </div>
        <div className={s.galeritem}>
          <Image
            src='/static/img/jupiter_galaxy_planet.png'
            alt='earth'
            width={200}
            height={200}
          />
        </div>
        <div className={s.galeritem}>
          <Image
            src='/static/img/moon_galaxy_planet.png'
            alt='earth'
            width={200}
            height={200}
          />
        </div>
        <div className={s.galeritem}>
          <Image
            src='/static/img/Saturn_galaxy_planet.png'
            alt='earth'
            width={200}
            height={200}
          />
        </div>
        <div className={s.galeritem}>
          <Image
            src='/static/img/venus_galaxy_planet.png'
            alt='earth'
            width={200}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}
