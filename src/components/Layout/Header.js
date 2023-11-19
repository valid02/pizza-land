import classes from './Header.module.css';
import pizzasImage from '../../assets/pizza.jpg';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>پیتزالند</h1>
        <button>سبد خرید</button>
      </header>
      <div className={classes['main-image']}>
        <img src={pizzasImage} alt="پیتزا" />
      </div>
    </>
  );
};

export default Header;
