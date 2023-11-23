import classes from './Header.module.css';
import pizzasImage from '../../assets/pizza.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <>
      <header className={classes.header}>
        <h1>پیتزالند</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={pizzasImage} alt="پیتزا" />
      </div>
    </>
  );
};

export default Header;
