import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>انواع پیتزا های خوشمزه، برای شما عزیزان</h2>
      <p>
        پیتزا مورد علاقه خود را از بین پیتزا های متنوع ما انتخاب کنید
        و از خوردن پیتزا خاص و خوشمزه لذت ببرید.
      </p>
      <p>
        تمام پیتزا های ما با مواد اولیه مرغوب به موقع و البته زیر نظر شف با تجربه درست میشوند.
      </p>
    </section>
  );
}
 
export default MealsSummary;