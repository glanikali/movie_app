import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

type Props = {
  setSearch: (searchQuery: string) => void;
  search: string;
};
export default function Search({ setSearch, search }: Props) {
  return (
    <div className="flex gap-4 bg-ion-light shadow-sm rounded p-2 w-11/12 sm:w-auto">
      <span className="w-7 h-auto flex place-content-center">
        <SearchIcon className="fill-icon" />
      </span>
      <input
        className="focus:outline-none py-2 w-72 text-sm text-zinc-200 bg-ion-light"
        type="text"
        style={{ color: 'whitesmoke' }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for movies or TV shows"
      />
    </div>
  );
}
