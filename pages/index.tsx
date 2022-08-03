import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Search from '@/components/Input/Search';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changeFetchData, reset, changePage } from 'store/data';
import MovieList from '@/components/List/MovieList';
import ContentWrapper from '@/components/Layout/ContentWrapper';
import Pagination from '@/components/Pagination/Pagination';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const { page, results } = useAppSelector((state) => state.dataReducer);

  useEffect(() => {
    const callMovieApi = async () => {
      await fetch('/api/getMovieInfo', {
        method: 'POST',
        body: JSON.stringify({ query: search, page }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((movieList) => {
          dispatch(changeFetchData(movieList));
        })
        .catch((err) => {
          console.error(err);
          dispatch(reset());
        });
    };
    if (search) {
      callMovieApi();
    }
  }, [search, page, dispatch]);

  return (
    <div className="relative">
      {results?.length > 0 && (
        <Pagination
          handlePageChange={(pageChangeEvent) =>
            dispatch(changePage(pageChangeEvent))
          }
        />
      )}

      <div className="bg-ion">
        <div className=" h-16 shadow-md flex place-content-center p-2">
          <Search
            search={search}
            setSearch={(searchQuery) => {
              dispatch(changePage(1));
              setSearch(searchQuery);
            }}
          />
        </div>
      </div>
      <div className="bg-ion min-h-[calc(100vh_-_64px)]">
        <ContentWrapper>
          <MovieList search={search} />
        </ContentWrapper>
      </div>
    </div>
  );
};

export default Home;
