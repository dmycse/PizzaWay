import { Product } from "@prisma/client";
import { axiosInstance } from "@/utils/axios";
import { ApiRoutes } from "@/utils/api-constants";

export const searchProducts = async (query: string): Promise<Product[]> => {
  let { data } = await axiosInstance.get<Product[]>(`${ApiRoutes.SEARCH_PRODUCTS}?q=${query}`);
  
  return data;
};