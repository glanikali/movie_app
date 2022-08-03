import React from 'react';
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from '@heroicons/react/solid';
import { useAppSelector } from 'store/hooks';
type Props = {
  handlePageChange: (pageChangeEvent: number) => void;
};
export default function Pagination({ handlePageChange }: Props) {
  const { page, total_pages: totalPages } = useAppSelector(
    (state) => state.dataReducer
  );
  const handleClick = (type: string) => {
    if (type === 'decrement' && page > 1) {
      handlePageChange(page - 1);
    }
    if (type === 'increment' && page < totalPages) {
      handlePageChange(page + 1);
    }
  };

  return (
    <div className="fixed bottom-1 right-1 z-20 flex gap-2 items-center">
      <ArrowCircleLeftIcon
        className={`h-7  ${
          page > 1 ? 'fill-neon cursor-pointer' : 'fill-ion-light'
        }`}
        onClick={() => handleClick('decrement')}
      />
      <div className="text-neon text-xl">{page}</div>
      <ArrowCircleRightIcon
        className={`h-7 cursor-pointer  ${
          page < totalPages ? 'fill-neon cursor-pointer' : 'fill-ion-light'
        }`}
        onClick={() => handleClick('increment')}
      />
    </div>
  );
}
