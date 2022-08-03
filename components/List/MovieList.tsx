import React from 'react';
import { useAppSelector } from 'store/hooks';
import Listable from './Listable';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function MovieList({ search }: { search: string }) {
  const { results } = useAppSelector((state) => state.dataReducer);
  const [listRef] = useAutoAnimate<HTMLDivElement>();

  if (results?.length === 0 && search) {
    return (
      <div>
        <h2 className="text-slate-200 text-center text-3xl py-10">
          Sorry Nothing Found...
        </h2>
      </div>
    );
  }

  return (
    <div
      ref={listRef}
      className="grid gap-4 grid-cols-1 rounded sm:grid-cols-4"
    >
      {results?.map((el) => (
        <Listable key={el.id} movieData={el} />
      ))}
    </div>
  );
}
