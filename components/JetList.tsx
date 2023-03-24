import React from 'react';
import JetCard from './JetCard';
import { Jet } from '@/types/Jet';

interface Props {
  jets: Jet[];
}

const JetList: React.FC<Props> = ({ jets }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {jets.map((jet) => (
        <JetCard key={jet.name} jet={jet} />
      ))}
    </div>
  );
};

export default JetList;
