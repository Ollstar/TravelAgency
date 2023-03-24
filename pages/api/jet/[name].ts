import { NextApiRequest, NextApiResponse } from "next";
import { jets } from "@/data/jets";
import { Jet } from "@/types/Jet";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Jet | { error: string }>
): void => {
  const {
    query: { name },
  } = req;

  if (typeof name !== "string") {
    res.status(400).json({ error: "Invalid jet name" });
    return;
  }

  const decodedName = decodeURIComponent(name);
  const jet = jets.find(
    (jet) => jet.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!jet) {
    res.status(404).json({ error: "Jet not found" });
    return;
  }

  res.status(200).json(jet);
};

export default handler;
