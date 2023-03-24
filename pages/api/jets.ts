import { Jet } from '@/types/Jet';
import type { NextApiRequest, NextApiResponse } from 'next';
import { jets } from '@/data/jets';

const handler = async (req: NextApiRequest, res: NextApiResponse<Jet[]>): Promise<void> => {
  res.status(200).json(jets);
};

export default handler;
