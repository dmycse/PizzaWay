import { Story, StoryItem } from '@prisma/client';
import { axiosInstance } from '@/utils/axios';

export type TStory = Story & {
  items: StoryItem[];
};

/**
 * Fetches all stories from the server.
 *
 * @returns A promise that resolves with an array of stories.
 * Each story is an object with the following properties:
 * - id: The ID of the story.
 * - items: An array of story items for the story. Each item is an object with the following properties:
 *   - id: The ID of the item.
 *   - storyId: The ID of the story that the item belongs to.
 *   - previewImageUrl: The URL of the preview image for the item.
 *   - createdAt: The time at which the item was created.
 *   - updatedAt: The time at which the item was last updated.
 * - createdAt: The time at which the story was created.
 * - updatedAt: The time at which the story was last updated.
 */
export const getAllStories = async () => {
  const { data } = await axiosInstance.get<TStory[]>('/stories');

  return data;
};