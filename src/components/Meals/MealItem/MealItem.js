import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { separateNumber, toFarsiNumber } from '../../Helpers/Helpers';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span className={classes.price}>{toFarsiNumber(separateNumber(props.price))} تومان</span>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
 
export default MealItem;