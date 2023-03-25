import React from "react";
import { Employee } from "@/types/Employee";
import { motion } from "framer-motion";

interface Props {
  employee: Employee;
}

const EmployeeCard: React.FC<Props> = ({ employee }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg shadow-md"
    >
      <div className="border rounded-lg p-4">
        <img
          src={employee.imageUrl}
          alt={employee.name}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-xl font-bold mt-4">{employee.name}</h3>
        <p className="mt-2">{employee.position}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-indigo-500 transition duration-200">
          <a href={`/employee/${employee.name}`}>View Profile</a>
        </button>
      </div>
    </motion.div>
  );
};

export default EmployeeCard;
