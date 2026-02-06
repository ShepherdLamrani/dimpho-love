
import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ title, id, children, bgColor = "bg-white" }) => {
  return (
    <section id={id} className={`py-20 px-6 ${bgColor} relative z-10`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif-elegant text-pink-600 mb-10 text-center">
          {title}
        </h2>
        <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
