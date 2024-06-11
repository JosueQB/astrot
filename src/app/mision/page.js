import Image from 'next/image';
import Navbar from '../../../components/navbar';
import s from '../../../static/css/mision.module.css';
export const metadata = {
  title: 'Mision Espacial',
};
export default function Ver() {
  return (
    <main>
      <>
        <Navbar />
      </>
      <div className={s.Contentprincipal}>
        <div className={s.Contentitem1}>
          <h1>Mision</h1>

          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
          <br/><br/> No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </div>
        <div className={s.Contentitem2}>
          <Image src='/static/img/mision.png' height={300}
          width={300} alt='mision'/>
        </div>
      </div>
    </main>
  );
}
