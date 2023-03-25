import React from 'react';
import { Employee } from '@/types/Employee';
import { motion } from 'framer-motion';

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
      <div className="border rounded-lg flex flex-col h-full">
        <img
          src={employee.imageUrl}
          alt={employee.name}
          className="w-full h-48 object-cover"
        />
        <div className="min-h-0 justify-between flex-grow flex flex-col">
          <div>
            <h3 className="text-xl font-bold mt-4 ml-2">{employee.name}</h3>
            <p className="mt-2 ml-2">{employee.position}</p>
            <div className="flex mt-2 space-x-4"></div>
          </div>
          <div className="flex-grow overflow-y-auto mt-2 p-2">
            {/* Add employee.description if available */}
          </div>
        </div>
        <div className="mt-4 flex p-2">
          <a
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:bg-indigo-500 transition duration-200 flex-grow"
            href={`/employee/${employee.name}`}
          >
            View Profile
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default EmployeeCard;
