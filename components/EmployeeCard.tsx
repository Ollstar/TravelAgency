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
      className="overflow-hidden h-full rounded-lg shadow-md bg-white"
    >
      <div className="border rounded-lg flex flex-col min-h-full">
        <img
          src={employee.imageUrl}
          alt={employee.name}
          className="w-full h-48 object-cover"
        />
        <div className="min-h-full justify-between flex-grow flex flex-col p-4">
          <div>
            <h3 className="text-xl font-bold mb-4">{employee.name}</h3>
            <p className="mb-4">{employee.position}</p>
            <div className="flex space-x-4 mb-4"></div>
          </div>
          <div className="flex-grow overflow-y-auto mb-4">
            {/* Add employee.description if available */}
          </div>
        </div>
        <div className="border-t mt-4 flex p-4">
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
