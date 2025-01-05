import { User } from '@prisma/client';
import { axiosInstance } from '@/utils/axios';

/**
 * Fetches the current user's data from the server.
 */
export const getMyData = async () => {
  const { data } = await axiosInstance.get<User>('/auth/me');

  return data;
};