import { Suspense } from 'react';
import BlogsFeaturedPage from "@/components/featured-blog";
import Hero from "@/components/hero";
import Project from "@/components/featured-projects";
import dynamic from 'next/dynamic';
import AboutSnippet from '@/components/about-section';

const ClientAnimatedWrapper = dynamic(
  () => import('@/components/animated-framer-wrapper'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
      <ClientAnimatedWrapper variant="scaleIn" delay={0.2}>
      <AboutSnippet />
      </ClientAnimatedWrapper>
      <Project />
        <ClientAnimatedWrapper variant="gentleRise" delay={0.6}>
          <BlogsFeaturedPage />
        </ClientAnimatedWrapper>
      </Suspense>
    </>
  );
}
