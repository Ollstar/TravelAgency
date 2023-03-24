import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { Jet } from "@/types/Jet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { fetchAirportCities } from "@/pages/api/fetchAirportCities";


interface Props {
  jet: Jet;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSubmit: (data: any) => void;
}

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    minHeight: "42px",
    borderRadius: "0.375rem",
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    padding: "2px 8px",
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorsContainer: (provided: any, state: any) => ({
    ...provided,
    padding: "2px 8px",
  }),
};

const BookingModal: React.FC<Props> = ({
  jet,
  isOpen,
  setIsOpen,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [startDate, setStartDate] = useState(new Date());
  const [cities, setCities] = useState([]);
  const [departureCity, setDepartureCity] = useState(null);
  const [arrivalCity, setArrivalCity] = useState(null);

  const handleSearch = async (inputValue: string) => {
    if (inputValue.length ) {
      const fetchedCities = await fetchAirportCities(inputValue);
      setCities(fetchedCities);
    }
  };

  useEffect(() => {
    register("departureCity", { required: true });
    register("arrivalCity", { required: true });
    register("date");
  }, [register]);

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-blue opacity-30" />
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
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => {
                    setStartDate(date);
                    setValue("date", date);
                  }}
                  className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.date && (
                  <p className="text-red-500">Date is required </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block">Number of Occupants</label>
                <input
                  type= "number"
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
                <Select
                  styles={customStyles}
                  options={cities}
                  onInputChange={handleSearch}
                  onChange={(value) => {
                    setDepartureCity(value);
                    setValue("departureCity", value);
                  }}
                  value={departureCity}
                  placeholder="Search for departure city"
                />
                {errors.departureCity && (
                  <p className="text-red-500">Departure city is required</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block">Arrival City</label>
                <Select
                  styles={customStyles}
                  options={cities}
                  onInputChange={handleSearch}
                  onChange={(value) => {
                    setArrivalCity(value);
                    setValue("arrivalCity", value);
                  }}
                  value={arrivalCity}
                  placeholder="Search for arrival city"
                />
                {errors.arrivalCity && (
                  <p className="text-red-500">Arrival city is required</p>
                )}
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingModal;
