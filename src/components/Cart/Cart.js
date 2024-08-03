import { useContext, useState } from 'react';
import { separateNumber, toFarsiNumber } from '../../Helpers/Helpers';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem';
import OrderForm from './OrderForm';

const Cart = props => {
  const [isOrdering, setIsOrdering] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = toFarsiNumber(separateNumber(cartCtx.totalAmount));
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const orderHandler = () => {
    setIsOrdering(true);
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id} 
          name={item.name} 
          amount={item.amount} 
          price={item.price} 
          onRemove={cartItemRemoveHandler.bind(null, item.id)} 
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      {hasItems && <button className={classes.button} onClick={orderHandler}>تکمیل سفارش</button>}
      <button className={classes['button--alt']} onClick={props.onClose}>بستن</button>
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>هزینه کل</span>
        <span>{totalAmount} تومان</span>
      </div>
      {isOrdering && <OrderForm onCancel={props.onClose} />}
      {!isOrdering && modalActions}
    </Modal>
  );
};

export default Cart;