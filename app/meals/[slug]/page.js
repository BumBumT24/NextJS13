import Header from '@/app/components/Header';
import {getMeal} from '@/lib/meals';
import MealsGrid from '@/app/components/meals/meal-grid';
import MealItem from '@/app/components/meals/meal-item';
import classes from './page.module.css';
async function Meal({ params }) {
  const slug = params.slug;
  const meal = await getMeal(slug);  // Używaj jednej potrawy, a nie tablicy
  return <MealItem 
    title={meal.title}
    slug={meal.slug}
    image={meal.image}
    summary={meal.summary}
    creator={meal.creator} 
  />;
}

export default function Home({params}) {
  return (
    <main>
      <h1>Meal Details</h1>
      <Meal params={params}/> 
    </main>
  );
}
