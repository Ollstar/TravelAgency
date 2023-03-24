// api/destinations.ts
import { Destination, destinations } from '@/data/destinations';
import type { NextApiRequest, NextApiResponse } from 'next';


const handler = (req: NextApiRequest, res: NextApiResponse<Destination[]>): void => {
  res.status(200).json(destinations);
};

export default handler;
