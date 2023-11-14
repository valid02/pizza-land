import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  return (
    <li className={classes['menu-item']}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span className={classes.price}>{props.price}</span>
      </div>
    </li>
  );
}
 
export default MenuItem;