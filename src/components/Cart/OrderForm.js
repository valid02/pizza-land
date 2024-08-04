import { useRef, useState } from 'react';
import classes from './OrderForm.module.css';

const isEmpty = value => value.trim() === '';
const isNotValidPhone = value => value.trim().length !== 11 || !value.trim().startsWith('09');

const OrderForm = props => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    address: true,
    phone: true
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();

  const confirmHandler = event => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPhoneIsValid = !isNotValidPhone(enteredPhone);

    setFormInputValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      phone: enteredPhoneIsValid
    });

    const formIsValid = enteredNameIsValid && enteredAddressIsValid && enteredPhoneIsValid;

    if (!formIsValid) {
      return;
    }
    
    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      phone: enteredPhone
    });
  }

  const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;
  const addressControlClasses = `${classes.control} ${formInputValidity.address ? '' : classes.invalid}`;
  const phoneControlClasses = `${classes.control} ${formInputValidity.phone ? '' : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">نام</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>لطفا نام خود را وارد کنید</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">آدرس</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputValidity.address && <p>لطفا آدرس خود را وارد کنید</p>}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="phone">شماره تماس</label>
        <input type="tel" id="phone"  ref={phoneInputRef} />
        {!formInputValidity.phone && <p>لطفا شماره تماس خود را به صورت صحیح وارد کنید</p>}
      </div>
      <div className={classes.actions}>
        <button type="submit" className={classes.submit}>تایید</button>
        <button type="button" onClick={props.onCancel}>لغو</button>
      </div>
    </form>
  );
};

export default OrderForm;
