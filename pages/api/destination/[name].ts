// api/destinations/[name].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { destinations } from "@/data/destinations";
import { Destination } from "@/types/Destination";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Destination | { error: string }>
): void => {
  const {
    query: { name },
  } = req;

  if (typeof name !== "string") {
    res.status(400).json({ error: "Invalid destination name" });
    return;
  }

  const decodedName = decodeURIComponent(name);
  const destination = destinations.find(
    (destination) =>
      destination.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!destination) {
    res.status(404).json({ error: "Destination not found" });
    return;
  }

  res.status(200).json(destination);
};

export default handler;
