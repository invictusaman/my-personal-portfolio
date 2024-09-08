import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function AboutSnippet() {
  return (
    <div className="relative py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative">
        <div className="bg-[#E0E5EC] rounded-lg p-8 md:p-12 h-auto mx-auto relative mt-16">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#E0E5EC]">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 100,100" fill="#c2c7cd" />
            </svg>
          </div>
          <div className="absolute top-0 left-0 w-24 h-24 bg-[#E0E5EC]">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 0,100" fill="#c2c7cd" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-singleCard-foreground text-center mb-8 md:text-4xl">Discover My Journey</h2>
          <p className="text-singleCard-foreground text-md md:text-lg leading-relaxed mb-6">
          Hi, my name is Aman Bhattarai, and I was born in a small village in Nepal. The very first time I got interested in computers was when my dad introduced a desktop computer to our home while I was in Grade 5. I quickly became fascinated, spending many hours downloading software&apos;s, examining their capabilities and thinking about how one could built such a thing. This curiosity formed at such an early age paved for my love and appreciation for technology and programming.
          </p>
          <p className="text-singleCard-foreground text-md md:text-lg leading-relaxed mb-6">
          I was very good at maths from my early school days. Equations and number used to flow naturally to me. I can recall one incident when my maths teacher told me to teach the class for next few days since he was going out of town.
          </p>
          <p className="text-singleCard-foreground text-md md:text-lg leading-relaxed mb-6">
          With this passion for numbers and technologies, I went to Silicon valley of India -- Bangalore, where I did my Bachelors degree in Computer Science and Engineering. There, I did not only improve my programming proficiency but also for the first time I created a personal blog, which is currently live at TwistBlogg.com. I used to post themes and plugins for blogger, and write contents.
          </p>
          <p className="text-singleCard-foreground text-md md:text-lg leading-relaxed mb-6">
          Besides, I worked on internships related to application development and backend systems allowing me to gain more technical insights and also to improve my interpersonal skills. The Bachelor&apos;s final year project was such a milestone because it involved teaming-up with another team of four members and I was the team leader.
          </p>

          <div className="relative z-10">
            <div className="absolute bottom-0 left-0 w-full h-64 md:h-78 bg-gradient-to-t from-[#E0E5EC] via-[#E0E5EC]/80 to-transparent pointer-events-none filter blur-lg md:blur-xl"></div>
            <div className="absolute bottom-10 left-0 w-full flex justify-center items-center cursor-pointer">
              <Link href="/about">
                <Button
                  className="px-8 py-4 text-md font-medium md:py-8 md:px-12 lg:text-lg"
                  variant="noChange">
                  Larger Bio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
