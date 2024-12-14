'use client';

import { useEffect, useState } from 'react';

import ReactStories from 'react-insta-stories';
import { getAllStories, type TStory } from '@/lib/getStories';

import { Container } from '@/components/layout';
import { cn } from '@/lib';
import { X } from 'lucide-react';

type StoriesProps = {
  className?: string;
};

export const Stories = ({ className }: StoriesProps) => {

  const [stories, setStories] = useState<TStory[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<TStory>();

  useEffect(() => {
    async function fetchStories() {
      const data = await getAllStories();
      setStories(data);
    }

    fetchStories();
  }, []);

  const onClickStory = (story: TStory) => {
    setSelectedStory(story);

    if (story.items.length > 0) {
      setOpen(true);
    }
  };

  return (
    <>
      <Container className={cn('my-10 flex items-center justify-between gap-2', className)}>
        {stories.length === 0 &&
          [...Array(6)].map((_, index) => (
            <div key={index} className="w-[200px] h-[250px] bg-gray-200 rounded-md animate-pulse" />
          ))}

        {stories.map((story) => (
          <img
            key={story.id}
            onClick={() => onClickStory(story)}
            className="rounded-md cursor-pointer"
            height={250}
            width={200}
            src={story.previewImageUrl}
          />
        ))}

        {open && (
          <div className="w-full h-full absolute left-0 top-0 bg-black/80 flex justify-center items-center z-30">
            <div className="relative" style={{ width: 520 }}>
              <button className="absolute -right-10 -top-5 z-30" onClick={() => setOpen(false)}>
                <X className="w-8 h-8 absolute top-0 right-0 text-white/50" />
              </button>

              <ReactStories
                onAllStoriesEnd={() => setOpen(false)}
                stories={selectedStory?.items.map(item => ({ url: item.sourceUrl })) || []}
                defaultInterval={3000}
                width={420}
                height={600}
              />
            </div>
          </div>
        )}
      </Container>
    </>
  );
};