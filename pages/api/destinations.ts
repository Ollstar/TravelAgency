// api/destinations.ts
import { destinations } from '@/data/destinations';
import { Destination } from '@/types/Destination';
import type { NextApiRequest, NextApiResponse } from 'next';


const handler = (req: NextApiRequest, res: NextApiResponse<Destination[]>): void => {
  res.status(200).json(destinations);
};

export default handler;
