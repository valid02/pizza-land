import { useCallback, useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fechMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://react-http-ad85d-default-rtdb.firebaseio.com/meals.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          description: data[key].description,
          name: data[key].name,
          price: data[key].price
        });
      }

      setMeals(loadedMeals);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fechMoviesHandler();
  }, [fechMoviesHandler]);

  let content = <p>هیچ وعده غذایی یافت نشد.</p>;

  if (meals.length > 0) {
    const mealsList = meals.map(meal => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
    content = <ul>{mealsList}</ul>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>در حال بارگیری...</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        {content}
      </Card>
    </section>
  );
}
 
export default AvailableMeals;