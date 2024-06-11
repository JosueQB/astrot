import Image from 'next/image';
import styles from '../static/css/navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/">
                    <Image src="/static/img/Logo_rocket.png" alt='logo' width={50} height={50} />
                </a>
            </div>
            <ul className={styles.navLinks}>
                <li className={styles.li}>
                    <a className={styles.a} href="/">Inicio</a>
                </li>
                <li className={styles.li}>
                    <a className={styles.a} href="/Ver">Ver Astronomia</a>
                </li>
                <li className={styles.li}>
                    <a className={styles.a} href="/reciente">Descubrimiento Reciente</a>
                </li>
                <li className={styles.li}>
                    <a className={styles.a} href="/Planetario">Planetas y estrellas</a>
                </li>
                <li className={styles.li}>
                    <a  className={styles.a}href="/mision">Mision espacial</a>
                </li>
                <li className={styles.li}>
                    <a  className={styles.a}href="/contact">contacto</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;