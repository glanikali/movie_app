import React, { useState } from 'react';
import { Results } from 'store/data';
import Image from 'next/image';
import noPoster from '@/images/noposter.png';

export default function Listable({ movieData }: { movieData: Results }) {
  const { overview, poster_path, release_date, title, vote_average } =
    movieData;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w200${poster_path}`
    : noPoster;
  const [hover, setHover] = useState(false);
  const overviewSnippet =
    overview.length < 150 ? overview : overview.substring(0, 150) + '...';

  return (
    <div
      className="relative grid cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative h-[400px] w-auto sm:h-[400px] rounded overflow-hidden z-0">
        <Image
          className={`transition-all  shadow-md z-0 ${
            hover ? 'scale-110 brightness-[.25]' : ''
          }`}
          src={poster}
          layout="fill"
          alt={title}
        ></Image>
        {hover && (
          <div className="absolute z-10 h-full w-full grid">
            <h2 className="place-self-center text-white text-center text-lg">
              {title}
            </h2>
          </div>
        )}
      </div>
      <div
        className="px-4 py-4 z-10 grid grid-cols-2"
        style={{
          background:
            'linear-gradient(0deg,#132131 72%,rgba(15,25,38,.559165) 88%,transparent)',
        }}
      >
        <div className="h-[50px] justify-self-start">
          <h3 className="text-white text-sm font-semibold">{title}</h3>
          <p className="text-white text-sm">
            <em>{release_date}</em>
          </p>
        </div>
        <p className="text-white text-2xl self-start justify-self-end">
          {vote_average !== 0 ? `${vote_average} / 10` : 'Not Rated'}
        </p>
        <div className="col-span-2 pt-4">
          <p className="text-white text-xs">{overviewSnippet}</p>
        </div>
      </div>
    </div>
  );
}
