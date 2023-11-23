import { separateNumber, toFarsiNumber } from '../Helpers/Helpers';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'سوشی', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>هزینه کل</span>
        <span>{toFarsiNumber(separateNumber(560000))} تومان</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button}>پرداخت</button>
        <button className={classes['button--alt']} onClick={props.onClose}>بستن</button>
      </div>
    </Modal>
  );
};

export default Cart;