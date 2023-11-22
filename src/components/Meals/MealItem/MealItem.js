import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {
  const toFarsiNumber = n => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n.toString().replace(/\d/g, x => farsiDigits[x]);
  };

  function separate(number) {
    let numStr = String(number).replace(',', '');
  
    const [integerPart, decimalPart] = numStr.split('.');
    
    const decimal = decimalPart ? `.${decimalPart}` : '';
  
    const rgx = /(\d+)(\d{3})/;
    let formattedIntegerPart = integerPart;
    while (rgx.test(formattedIntegerPart)) {
      formattedIntegerPart = formattedIntegerPart.replace(rgx, (match, group1, group2) => `${group1},${group2}`);
    }
  
    return formattedIntegerPart + decimal;
  }
  
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span className={classes.price}>{toFarsiNumber(separate(props.price))} تومان</span>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};
 
export default MealItem;