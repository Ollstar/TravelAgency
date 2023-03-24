import { NextApiRequest, NextApiResponse } from "next";
import { employees } from "@/data/employees";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { name },
  } = req;
  if (typeof name !== "string") {
    res.status(400).json({ error: "Invalid destination name" });
    return;
  }
  const decodedName = decodeURIComponent(name);
  const employee = employees.find(
    (employee) =>
      employee.name.toLowerCase() === decodedName.toLowerCase()
  );
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }



  res.status(200).json(employee);
};
