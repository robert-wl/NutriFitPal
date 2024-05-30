import { UserCalorie } from "../../models/firebase/user-calorie.ts";

const maleCalorieCalculator = (weight: number, height: number, age: number) => {
  return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
};

const femaleCalorieCalculator = (weight: number, height: number, age: number) => {
  return 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
};

export default function calorieCalculator(weight: number, height: number, age: number, gender: string): UserCalorie {
  const dayCalorie = gender.toLowerCase() === "male" ? maleCalorieCalculator(weight, height, age) : femaleCalorieCalculator(weight, height, age);

  return {
    dayCalorie,
    breakfast: {
      calorieStart: dayCalorie * 0.2,
      calorieEnd: dayCalorie * 0.25,
    },
    lunch: {
      calorieStart: dayCalorie * 0.3,
      calorieEnd: dayCalorie * 0.35,
    },
    dinner: {
      calorieStart: dayCalorie * 0.3,
      calorieEnd: dayCalorie * 0.35,
    },
  };
}
