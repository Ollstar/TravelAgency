import React from "react";
import { Jet } from "@/types/Jet";
import JetCard from "./JetCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type JetListProps = {
  jets: Jet[];
};

const JetList: React.FC<JetListProps> = ({ jets }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const jetVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {jets.map((jet, index) => (
        <motion.div
          key={jet.id}
          custom={index}
          variants={jetVariants}
          initial="hidden"
          animate={controls}
        >
          <JetCard jet={jet} />
        </motion.div>
      ))}
    </div>
  );
};

export default JetList;
