import { Food } from "../../models/firebase/food.ts";

interface Props {
  title: string;
  start: number;
  end: number;
  foods: Food[];
}

export default function MealsCard({ title, start, end, foods }: Props) {
  return (
    <div className="flex flex-col rounded-lg bg-white border">
      <div className="p-5 space-y-3">
        <h3 className="flex items-end text-4xl gap-4 font-bold text-gray-900 text-start">{title}</h3>
        <p className="flex items-start text-lg">
          Recommended: {start} - {end} Calories
        </p>
      </div>
      <hr className="border-gray-300" />
      <div className="p-5 gap-5 flex flex-col">
        {foods.map((food) => (
          <div
            key={food.title}
            className="gap-10 flex">
            <img
              className="rounded-lg w-64 h-64"
              src="https://picsum.photos/200/300"
              alt="food"
            />
            <div className="flex flex-col justify-center py-5 text-start space-y-5">
              <h3 className="text-4xl font-bold text-gray-900">{food.title}</h3>
              <div>
                <p className="text-lg text-gray-500">Calories: {food.calories} / serving</p>
                <p className="text-lg text-gray-500">Protein: {food.protein} / serving</p>
                <p className="text-lg text-gray-500">Fat: {food.fat} / serving</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
