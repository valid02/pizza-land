import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'پیتزا پپرونی',
    description: 'خمیر مخصوص چاودار، پنیر موزارلا، پنیر گودا، پپرونی، فلفل تند',
    price: '261000',
  },
  {
    id: 'm2',
    name: 'پیتزا استیک مرغ',
    description: 'خمیر مخصوص چاودار، پنیر موزارلا، پنیر گودا، استیک مرغ، قارچ، فلفل دلمه ای',
    price: '283500',
  },
  {
    id: 'm3',
    name: 'پیتزا استیک گوشت',
    description: 'خمیر مخصوص چاودار، پنیر موزارلا، پنیر گودا، ۱۷۰ گرم راسته گوساله گریل شده، قارچ، زیتون',
    price: '378000',
  },
  {
    id: 'm4',
    name: 'پیتزا رست بیف',
    description: 'خمیر مخصوص چاودار، پنیر موزارلا، پنیر گودا، ۳۰۰ گرم سردست گوساله رست شده و قارچ، زیتون',
    price: '261000',
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
 
export default AvailableMeals;