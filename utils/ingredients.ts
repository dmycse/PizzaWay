import { Ingredient } from "@prisma/client";
import { axiosInstance } from "@/utils/axios";
import { ApiRoutes } from "@/utils/api-constants";

export const getAllIngredients = async (): Promise<Ingredient[]> => {
  let { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS);
  
  return data;
};