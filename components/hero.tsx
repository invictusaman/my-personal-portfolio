'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './contact-form';
import Image from 'next/image';
import { useAnimationVariant } from '@/components/animated-framer-wrapper';
import { Github, Linkedin, Twitter, PieChart, BarChart, TrendingUp} from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Hero() {
    const fadeIn = useAnimationVariant('subtleFade', 0.2, 1);
    const slideFromTop = useAnimationVariant('slideFromTop', 0.8, 0.5);
    const slideFromBottom = useAnimationVariant('slideFromBottom', 1.0, 0.6);
    const slideFromLeft = useAnimationVariant('slideFromLeft', 1.4, 0.6);
    const expandWidth = useAnimationVariant('expandWidth', 1.5, 0.6);
    const scaleIn = useAnimationVariant('scaleIn', 1.6, 0.6);

    return (
      <div>
        {/* Hero top */}
        <motion.div className="relative bg-singleCard text-singleCard-foreground" {...fadeIn}>
          {/* Container */}
          <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 md:px-16 md:py-24 lg:px-24 xl:px-32">
            <ContactForm>
              <motion.div
                className="inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium mb-4"
                {...slideFromTop}
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span>Available for Work</span>
              </motion.div>
            </ContactForm>
            {/* Title */}
             {/* Title */}
          <motion.h1
            className="mb-8 max-w-3xl text-4xl font-bold md:mb-10 md:text-5xl lg:mb-12 lg:text-6xl"
            {...slideFromBottom}
          >
            Creating Compelling Stories From Data
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-8 max-w-2xl text-lg md:text-xl font-light"
            {...slideFromBottom}
          >
            I turn complex data into clear, impactful stories, providing actionable insights that drive strategic business decisions.
          </motion.p>
            {/* Buttons and Social Icons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="https://www.kaggle.com/amanbhattarai695" target="_blank" rel="nofollow noopener external">
                <Button variant="default" className="mr-2 text-md md:text-lg px-6 py-6 text-center font-light md:mr-4 md:px-7 md:py-7">
                  I am on Kaggle
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank" rel="nofollow noopener external">
                <Button variant="secondary" className="text-md md:text-lg px-6 py-6 text-center font-light md:px-7 md:py-7">
                  Get my Resume
                </Button>
              </Link>
            </div>
          </div>

          {/* Data visualization elements */}
          <div className="hidden lg:inline-block absolute bottom-[18%] left-10 opacity-30">
            <BarChart size={48} />
          </div>
          <motion.div
          className="hidden md:inline-block absolute top-[48%] left-[28%] opacity-30"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrendingUp size={56} />
        </motion.div>

        </motion.div>

        {/* Hero bottom */}
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 md:px-16 md:py-16 lg:px-24 xl:px-32 lg:py-20">
          {/* Component */}
          <div className="relative flex max-w-7xl flex-col gap-8 lg:flex-row lg:justify-end text-foreground">
            {/* Image */}
            <motion.div
              className="relative w-full max-w-lg mx-auto border-0 lg:absolute lg:top-[-50%] xl:top-[-80%] lg:right-0 lg:w-[450px] lg:h-[450px]"
              {...scaleIn}
            >
              <Image
                src="/profile-pic.webp"
                width={480}
                height={480}
                alt="Aman - Data Analyst"
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="max-w-[780px] lg:max-w-xl lg:mr-[520px]"
              {...slideFromLeft}
            >
              {/* Title */}
              <h3 className="text-2xl mt-5 font-bold md:text-3xl lg:mt-0">Meet Aman</h3>
              {/* Divider */}
              <motion.div
                className="my-4 w-16 border-t border-muted-foreground"
                {...expandWidth}
              ></motion.div>
              <p className="text-md md:text-lg font-light mb-8">
              I am a Data Analyst with IBM certification, and have a Bachelors in Computer Engineering with specialization in Data Science. I analyze data using Python, SQL and BI tools and love converting data into meaningful and effective stories. I will be more than willing to put my skills in a more professional environment apart from being keen to learn more.
              </p>
              {/* Arrow down */}
              <motion.div
              className="flex justify-center mt-30"
              whileHover={{ y: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <a href="#about-section">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <path d="M44 36L42.59 34.59L37 40.17V28H35V40.17L29.42 34.58L28 36L36 44L44 36Z" fill="currentColor"/>
                    <circle cx="36" cy="36" r="35.5" stroke="#E2E2E2"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
