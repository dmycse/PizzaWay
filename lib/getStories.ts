import { Story, StoryItem } from '@prisma/client';
import { axiosInstance } from '@/utils/axios';

export type TStory = Story & {
  items: StoryItem[];
};

export const getAllStories = async () => {
  const { data } = await axiosInstance.get<TStory[]>('/stories');
  console.log('data', data)
  return data;
};