import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>&copy; {new Date().getFullYear()} Created by Lucas Montecino</p>
    </footer>
  );
};

export default Footer;
