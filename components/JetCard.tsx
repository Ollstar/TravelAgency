import React, { useState } from "react";
import { Jet } from "@/types/Jet";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  jet: Jet;
}

const JetCard: React.FC<Props> = ({ jet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setIsOpen(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg shadow-md"
    >
      <div className="border rounded-lg p-4 flex flex-col h-full">
        <img
          src={jet.imageUrl}
          alt={jet.name}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-xl font-bold mt-4">{jet.name}</h3>
        <div className="flex mt-2 space-x-4">{/* ...rest of the code */}</div>
        <div className="flex-grow overflow-y-auto mt-2">
          <p>{jet.description}</p>
        </div>
        <div className="mt-4 flex">
          <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:bg-indigo-500 transition duration-200 flex-grow">
            <a href={`/jet/${jet.name}`}>Learn More</a>
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-200 flex-grow"
          >
            Book Now
          </button>
        </div>

        <Transition appear show={isOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setIsOpen(false)}
          >
            <div className="min-h-screen px-4 text-center">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Book {jet.name}
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-4">
                    <label className="block">Date</label>
                    <input
                      type="date"
                      {...register("date", { required: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.date && (
                      <p className="text-red-500">Date is required</p>
                    )}
                  </div>
                  <div className="mt-4">
                    <label className="block">Number of Occupants</label>
                    <input
                      type="number"
                      {...register("occupants", { required: true, min: 1 })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.occupants && (
                      <p className="text-red-500">
                        Number of occupants must be at least 1
                      </p>
                    )}
                  </div>
                  <div className="mt-4">
                    <label className="block">Departure City</label>
                    <input
                      type="text"
                      {...register("departureCity", { required: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.departureCity && (
                      <p className="text-red-500">Departure city is required</p>
                    )}
                  </div>
                  <div className="mt-4">
                    <label className="block">Arrival City</label>
                    <input
                      type="text"
                      {...register("arrivalCity", { required: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.arrivalCity && (
                      <p className="text-red-500">Arrival city is required</p>
                    )}
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-200"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </motion.div>
  );
};

export default JetCard;
