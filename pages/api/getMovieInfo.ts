// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page, query } = req.body;
  await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_DB_API}&language=en-US&page=${page}&include_adult=false&query=${query}`
  )
    .then((result) => result.json())
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ error: err }));
}

// testing
