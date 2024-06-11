import Image from 'next/image';
import styles from '../../static/css/inicio.module.css'
export const metadata = {
  title: "Inicio",
};
export default function Home() {
  return (
    <main>
      <div className={styles.Head}>
        <h1 className={styles.title}>Astronomía y espacio:</h1>
        <h5 className={styles.content}>Descubrimientos recientes, misiones espaciales, planetas y estrellas, observatorio astronómico.</h5>
      </div>
      <div className={styles.image}>
        <a href='./Ver'>
          <Image src='/static/img/Logo_rocket.png' height={300} width={300} alt='logo'/>
        </a>
      </div>
      <div className={styles.btn}>
        <a href='./Ver' className={styles.button}>Ver Astronomia</a>
      </div>
    </main>
  );
}
