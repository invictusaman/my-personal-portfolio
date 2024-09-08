import { projects } from "#site/content";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';

const ClientAnimatedWrapper = dynamic(
    () => import('@/components/animated-framer-wrapper'),
    { ssr: false }
);

export default function ProjectsFeaturedPage() {
    const featuredProjects = projects.filter(project => project.published && project.featured);
    return (
        <MaxWidthWrapper className="py-10 md:py-20">
            <div className="my-2 w-24 border-b border-muted-foreground"/>
            <h2 className="text-xl font-bold mb-4" id='#featured-projects'>FEATURED PROJECTS</h2>
            <div className="grid grid-cols-1 gap-14">
                {featuredProjects.map((project, index) => (
                 <ClientAnimatedWrapper key={project.slug} variant="subtleFade" delay={0.1 * (index + 1)} duration={0.7}>
                        <Card
                            key={project.slug}
                            className="flex flex-col lg:flex-row-reverse border-0 min-h-[500px] justify-between"
                            style={{ backgroundColor: project.background || '#DFE4EC' }}
                        >
                            <Link href={`${project.slug}`} className="w-full lg:w-2/3 flex-shrink-0 cursor-default">
                                <div className="relative w-full h-full flex justify-center items-center p-4 lg:p-8">
                                    <div className="relative">
                                        {project.image && (
                                            <Image
                                                alt={project.title}
                                                className="object-cover shadow-xl rounded-lg"
                                                width={1280}
                                                height={832}
                                                src={project.image}
                                                blurDataURL="data:..."
                                                placeholder="blur"
                                            />
                                        )}
                                    </div>
                                </div>
                            </Link>
                            <div className="lg:w-1/3 flex flex-col justify-between p-4 lg:py-8 lg:px-6">
                                <CardHeader className="mb-6">
                                    <CardTitle className="text-2xl xl:text-3xl font-extrabold text-gray-900">{project.title}</CardTitle>
                                    <div className="w-16 border-t border-gray-500"/>
                                    <CardDescription className="text-base xl:text-lg font-light text-singleCard-foreground mt-2 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                                        {project.description}
                                    </CardDescription>
                                    {(project.timeline || project.tags) && (
                                        <div className="!mt-9 flex flex-row lg:!mt-12 lg:flex-col">
                                            {project.timeline && (
                                                <dl className="mr-10">
                                                    <dt className="text-sm text-singleCard-foreground font-light">Project Timeline</dt>
                                                    <dd className="text-md text-singleCard-foreground font-normal mb-5">{project.timeline}</dd>
                                                </dl>
                                            )}
                                            {project.tags && project.tags.length > 0 && (
                                                <dl>
                                                    <dt className="text-sm text-singleCard-foreground font-light">Key Terms</dt>
                                                    <dd className="text-md text-singleCard-foreground font-normal">{project.tags.join(', ')}</dd>
                                                </dl>
                                            )}
                                        </div>
                                    )}
                                </CardHeader>
                                <CardFooter className="flex flex-wrap gap-2 mt-4">
                                    <Link href={`${project.slug}`} aria-label={`Read case on ${project.title}`}>
                                        <Button variant="noChange" className="px-12 py-2 font-light xl:py-3">Read Case</Button>
                                    </Link>
                                </CardFooter>
                            </div>
                        </Card>
                  </ClientAnimatedWrapper>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}
