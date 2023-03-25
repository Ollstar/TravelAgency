// api/search.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { destinations} from '@/data/destinations';
import { Destination } from '@/types/Destination';

const handler = (req: NextApiRequest, res: NextApiResponse<Destination[]>): void => {
  const { query } = req.query;

  if (typeof query !== 'string') {
    res.status(400).json([]);
    return;
  }

  const searchResults = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(searchResults);
};

export default handler;
