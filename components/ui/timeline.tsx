import React from 'react';
import AnimatedWrapper from '@/components/animated-framer-wrapper';

interface TimelineItemProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
  }

  interface TimelineProps {
    items: TimelineItemProps[];
  }

  const Timeline: React.FC<TimelineProps> = ({ items }) => (
    <div className="relative space-y-12">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 border-l border-gray-300 transform"></div>
      {items.map((item, index) => (
        <AnimatedWrapper key={index} variant="gentleRise" delay={0.2}>
          <div className="relative mb-12">
            <div className="flex items-center mb-4">
              <div className="absolute left-6 transform -translate-x-1/2 bg-white rounded-full p-2 z-10">
                <div className="bg-singleCard text-singleCard-foreground rounded-full p-2">{item.icon}</div>
              </div>
              <h3 className="text-2xl font-bold ml-16">{item.title}</h3>
            </div>
            <div className="ml-16 text-lg md:text-xl font-light !leading-relaxed">{item.children}</div>
          </div>
        </AnimatedWrapper>
      ))}
    </div>
  );

  export default Timeline;
