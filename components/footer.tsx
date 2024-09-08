import React from 'react';
import dynamic from 'next/dynamic';
import MaxWidthWrapper from "./max-width-wrapper";

// Dynamically import components
const AnimatedWrapper = dynamic(() => import("./animated-framer-wrapper"), { ssr: false });
const Connect = dynamic(() => import("./connect"));
const CodingHours = dynamic(() => import("./coding-hours"));
const GiveStar = dynamic(() => import("./give-star"));
const Available = dynamic(() => import("./available"));
const Location = dynamic(() => import("./location"));
const TechStack = dynamic(() => import("./techstack"));

export default function Footer() {
  return (
    <MaxWidthWrapper className="pb-8 pt-15 md:pb-12 md:pt-20">
      <AnimatedWrapper variant="gentleRise" delay={0.6} useInView={true}>
        <footer className="font-light pt-10 border-t-[10px] border-t-singleCard grid sm:grid-cols-2 gap-4 sm:gap-8">
          <div className="grid gap-4">
            <Connect />
            <div className="grid grid-cols-2 gap-4">
              <CodingHours />
              <GiveStar />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Available />
              <Location />
            </div>
            <TechStack />
          </div>
        </footer>
      </AnimatedWrapper>
    </MaxWidthWrapper>
  );
}
