import Navbar from "../../../components/navbar";
import styles from "../../../static/css/carrousel.module.css"
export const metadata = {
  title: "Ver astronomia",
};
export default function Ver() {
  return (
    <main className={styles.main}>
      <>
        <Navbar />
      </>
      <div className={styles.titulo}>
        <h1>Astronomía y espacio</h1>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
          cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
          galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
           No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
           electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
           creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más 
           recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual 
           incluye versiones de Lorem Ipsum.</p>
      </div>
      
      <div className={styles.carrousel}>
        <div key="1" className={styles.carouselItem}>
          <img
            src="../../../static/img/earth_galaxy.png"
            alt="earth"
            className={styles.image}
            width={200}
            height={200}
          />
          <div className={styles.info}>
            <h3>earth_galaxy</h3>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          </div>
        </div>
        <div key="2" className={styles.carouselItem}>
          <img
            src="../../../static/img/jupiter_galaxy_planet.png"
            alt="earth"
            className={styles.image}
            width={200}
            height={200}
          />
          <div className={styles.info}>
            <h3>jupiter_galaxy_planet</h3>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          </div>
        </div>
        <div key="3" className={styles.carouselItem}>
          <img
            src="../../../static/img/Saturn_galaxy_planet.png"
            alt="earth"
            className={styles.image}
            width={200}
            height={200}
          />
          <div className={styles.info}>
            <h3>Saturn_galaxy_planet</h3>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          </div>
        </div>
        <div key="4" className={styles.carouselItem}>
          <img
            src="../../../static/img/venus_galaxy_planet.png"
            alt="earth"
            className={styles.image}
            width={200}
            height={200}
          />
          <div className={styles.info}>
            <h3>venus_galaxy_planet</h3>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          </div>
        </div>
        <div key="5" className={styles.carouselItem}>
          <img
            src="../../../static/img/moon_galaxy_planet.png"
            alt="earth"
            className={styles.image}
            width={200}
            height={200}
          />
          <div className={styles.info}>
            <h3>moon_galaxy_planet</h3>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          </div>
        </div>
      </div>
    </main>
  );
}
