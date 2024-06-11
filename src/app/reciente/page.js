import Image from 'next/image';
import Navbar from '../../../components/navbar';
import styles from '../../../static/css/reciente.module.css';
export const metadata = {
  title: 'Recientes',
};
export default function recientes() {
  return (
    <main>
      <>
        <Navbar />
      </>
      <div className={styles.tit}>
        <h1>DESCUBRIMIENTOS RECIENTES</h1>
      </div>
      <div className={styles.titcontent}>
        <h1>La NASA descubrió una “super-Tierra” que ofrece nuevas esperanzas en la búsqueda de planetas capaces de albergar vida</h1>
        <div className={styles.cont} >
          <Image src='/static/img/about-icon.png' height={50} width={50} alt='user'/>
          <div>por Josue Quijije</div>
        </div>
        <div>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. <br/><br/> Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. <br/><br/> No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </div>
        <div>
          <center><Image src='/static/img/galaxy-planets-solar.png' height={400} width={400} alt='solar'/></center>
        </div>
        <div>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. <br/><br/>No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </div>
        <div>
          <center><Image src='/static/img/venus_galaxy_planet.png' height={300} width={300} alt='venus'/></center>
        </div>
      </div>
    </main>
  );
}
