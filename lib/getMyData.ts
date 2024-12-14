import { User } from '@prisma/client';
import { axiosInstance } from '@/utils/axios';

export const getMyData = async () => {
  const { data } = await axiosInstance.get<User>('/auth/me');

  return data;
};