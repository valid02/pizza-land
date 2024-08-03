import classes from './OrderForm.module.css';

const OrderForm = props => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">نام</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">آدرس</label>
        <input type="text" id="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">شماره تماس</label>
        <input type="tel" id="phone" />
      </div>
      <div className={classes.actions}>
        <button type="submit" className={classes.submit}>تایید</button>
        <button type="button" onClick={props.onCancel}>لغو</button>
      </div>
    </form>
  );
};

export default OrderForm;
