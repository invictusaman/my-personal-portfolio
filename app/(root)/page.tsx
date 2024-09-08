import dynamic from 'next/dynamic';
import Hero from "@/components/hero";
import Project from "@/components/featured-projects";
import AboutSnippet from '@/components/about-section';

const ClientAnimatedWrapper = dynamic(
  () => import('@/components/animated-framer-wrapper'),
  {
    ssr: false,
    loading: () => <div>Loading animation...</div>,
  }
);

const ClientSideBlogsFeatured = dynamic(
  () => import("@/components/featured-blog"),
  {
    ssr: false,
    loading: () => <div>Loading blogs...</div>,
  }
);

export default function Home() {
  return (
    <>
      <Hero />
      <ClientAnimatedWrapper variant="scaleIn" delay={0.2}>
        <AboutSnippet />
      </ClientAnimatedWrapper>
      <Project />
      <ClientAnimatedWrapper variant="gentleRise" delay={0.6}>
        <ClientSideBlogsFeatured />
      </ClientAnimatedWrapper>
    </>
  );
}
