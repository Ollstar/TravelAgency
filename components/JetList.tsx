import React from "react";
import { Jet } from "@/types/Jet";
import JetCard from "./JetCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type JetListProps = {
  jets: Jet[];
};

const JetList: React.FC<JetListProps> = ({ jets }) => {

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {jets.map((jet, index) => (
        <div key={index}>
          <JetCard jet={jet} />
        </div>
      ))}
    </div>
  );
};

export default JetList;
