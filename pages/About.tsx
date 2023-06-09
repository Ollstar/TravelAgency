// src/pages/about.tsx
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Employee } from "@/types/Employee";
import EmployeeCard from "@/components/EmployeeCard";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import SpecializedServices from "@/components/SpecializedServices";
import CTASection from "@/components/CTAsection";

const About: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await fetch("/api/employees");
    const data: Employee[] = await res.json();
    setEmployees(data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <section className="container mx-auto my-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            70 Years of Crafting Unforgettable Travel Experiences
          </h1>
          <p>
            Insert your travel agency story here
          </p>
        </section>
        <section className="container mx-auto my-8">
          <Timeline />
        </section>
        <section className="container mx-auto my-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((employee) => (
              <EmployeeCard key={employee.name} employee={employee} />
            ))}
          </div>
        </section>
        <section className="container mx-auto my-8">
          <Testimonials />
        </section>
        <section className="container mx-auto my-8">
          <SpecializedServices />
        </section>
        <section className="container mx-auto my-8">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
