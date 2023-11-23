import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { separateNumber, toFarsiNumber } from '../../Helpers/Helpers';

const MealItem = props => {
  
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span className={classes.price}>{toFarsiNumber(separateNumber(props.price))} تومان</span>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};
 
export default MealItem;