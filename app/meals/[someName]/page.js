import Header from '@/app/components/Header';
import {getMeal} from '@/lib/meals';
import MealsGrid from '@/app/components/meals/meal-grid';
async function Meal({params}) {
  const slug = params.slug; // Pobierz slug z params
  const meals = await getMeal(slug); // Przekaż slug do getMeal
  return <MealsGrid meals={meals} />;
}

export default function Home({params}) {
  return (
    <main>
      <h1>Meal Details</h1>
      <Meal params={params}/> {/* Przekaż params do Meal */}
    </main>
  );
}
