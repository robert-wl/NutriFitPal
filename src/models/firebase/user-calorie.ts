export interface UserCalorie {
  dayCalorie: number;
  breakfast: {
    calorieStart: number;
    calorieEnd: number;
  };
  lunch: {
    calorieStart: number;
    calorieEnd: number;
  };
  dinner: {
    calorieStart: number;
    calorieEnd: number;
  };
}
