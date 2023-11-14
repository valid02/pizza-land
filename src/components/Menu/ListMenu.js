import MenuItem from "./MenuItem";
import classes from './ListMenu.module.css';
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'پیتزا پپرونی',
    description: 'خمیر مخصوص چاودار، پنیر موزارلا، پنیر گودا، پپرونی، فلفل تند',
    price: '۲۶۱,۰۰۰ تومان',
  },
  {
    id: 'm2',
    name: 'پیتزا استیک مرغ',
    description: 'خمیر مخصوص چاودار، پنیر موزارلا، پنیر گودا، استیک مرغ، قارچ، فلفل دلمه ای',
    price: '۲۸۳,۵۰۰ تومان',
  },
  {
    id: 'm3',
    name: 'پیتزا استیک گوشت',
    description: 'خمیر مخصوص چاودار، پنیر موزارلا، پنیر گودا، ۱۷۰ گرم راسته گوساله گریل شده، قارچ، زیتون',
    price: '۳۷۸,۰۰۰ تومان',
  },
  {
    id: 'm4',
    name: 'پیتزا رست بیف',
    description: 'خمیر مخصوص چاودار، پنیر موزارلا، پنیر گودا، ۳۰۰ گرم سردست گوساله رست شده و قارچ، زیتون',
    price: '۲۶۱,۰۰۰ تومان',
  },
];

const ListMenu = () => {
  return (
    <section className={classes['menu-list']}>
      <Card>
        <ul>
          {DUMMY_MEALS.map(meal => (
            <MenuItem 
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
 
export default ListMenu;