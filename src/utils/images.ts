import { SyntheticEvent } from "react";

export function handleImageError(e: SyntheticEvent<HTMLImageElement>) {
  const element = e.target as HTMLImageElement;
  element.src = "/food/food-placeholder.png";
}
