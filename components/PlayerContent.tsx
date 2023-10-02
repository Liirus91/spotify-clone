'use client';

import { Song } from '@/types';
import MediaItem from './MediaItem';
import LikeButton from './LikeButton';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { AiFillStepBackward } from 'react-icons/ai';

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  //TODO: fix it
  const Icon = true ? BsPauseFill : BsPlayFill;

  return (
    <div className="grid grid-cols-2 h-full md:grid-cols-3">
      <div className="flex justify-start w-full">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div className="flex col-auto md:hidden w-full items-center justify-end">
        <div
          onClick={() => {}}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>

      <div className="w-full h-full hidden md:flex justify-center items-center max-w-[722px] gap-x-6">
        <AiFillStepBackward
          size={30}
          onClick={() => {}}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
    </div>
  );
};

export default PlayerContent;
