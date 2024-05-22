import { IHabitat } from "../interfaces/habitat.interface";

export const reArrangeCategories = (
  habitats: IHabitat[]
): { [key: string]: IHabitat[] } => {
  return habitats.reduce(
    (acc, habitat) => {
      if (acc[habitat.categoryId]) {
        acc[habitat.categoryId].push(habitat);
      } else {
        acc[habitat.categoryId] = [habitat];
      }
      return acc; // Return the accumulator
    },
    {} as { [key: string]: IHabitat[] }
  ); // Initial value for the accumulator
};
