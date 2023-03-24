import { NextApiRequest, NextApiResponse } from "next";
import { employees } from "@/data/employees";

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(employees);
};
