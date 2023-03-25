import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Employee } from "@/types/Employee";

const EmployeeProfile: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    if (name) {
      fetchEmployee();

    }
  }, [name]);

  const fetchEmployee = async () => {
    if (typeof name !== 'string') return;
    const res = await fetch(`/api/employee/${encodeURIComponent(name)}`);
    const data: Employee = await res.json();
    setEmployee(data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        {employee && (
          <section className="container mx-auto my-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              {employee.name}
            </h2>
            <p>{employee.bio}</p>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default EmployeeProfile;
