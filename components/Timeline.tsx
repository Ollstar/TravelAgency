import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { timelineData } from '@/data/timeline';
import { TimelineItem } from '@/types/TimelineItem';

const TimelineEvent: React.FC<TimelineItem> = ({ year, title, description }) => {
  return (
    <div className="flex items-center">
      <motion.svg
        width="16"
        height="16"
        className="text-blue-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <circle cx="8" cy="8" r="8" />
      </motion.svg>
      <div className="font-bold text-lg ml-4">{year}</div>
      <div className="bg-white shadow-lg rounded-lg p-4 ml-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const eventSpacing = 400; // Increase the spacing between events in pixels

  const timelineHeight = (timelineData.length - 1) * eventSpacing + eventSpacing;

  return (
    <div className="min-h-screen flex items-center">
      <h2 className="text-2xl font-bold text-center mb-8 absolute top-0 left-0 w-full">Our History</h2>
      <div className="relative w-full" style={{ height: `${timelineHeight}px` }}>
        <svg
          width="2"
          height="100%"
          className="text-gray-300 absolute left-1/2 top-0 transform -translate-x-1/2"
        >
          <rect x="0" y="0" width="2" height="100%" />
        </svg>
        {timelineData.map((item, index) => (
          <InView key={index} threshold={0.8}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="absolute left-1/2 top-0 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ y: `${index * eventSpacing + eventSpacing / 2}px` }}
              >
                <TimelineEvent {...item} />
              </motion.div>
            )}
          </InView>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
