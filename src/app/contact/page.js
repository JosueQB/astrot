import Image from 'next/image';
import Navbar from '../../../components/navbar';
import styles from '../../../static/css/contacto.module.css';
export const metadata = {
  title: 'contacto',
};
export default function Ver() {
  return (
    <main>
      <>
        <Navbar />
      </>
      
      <div className={styles.container}>
        <div className={styles.formgroup} >
          <a href='/mision'>
          <Image src='/static/img/mision.png' height={300} width={300} alt='mision' />
            </a>
          <h1 className={styles.h1}>Contacto</h1>
          <form className={styles.form}>
            <label className={styles.label} htmlFor='name'>Nombre</label>
            <input className={styles.input} type='text' id='name' name='name' placeholder='Tu nombre' required />

            <label className={styles.label} htmlFor='email'>Email</label>
            <input className={styles.input} type='email' id='email' name='email' placeholder='Tu email' required />

            <label className={styles.label} htmlFor='message'>Mensaje</label>
            <textarea className={styles.textarea} id='message' name='message' placeholder='Tu mensaje' required></textarea>

            <button className={styles.button} type='submit'>Enviar</button>
          </form>

        </div>
      </div>
    </main>
  );
}
