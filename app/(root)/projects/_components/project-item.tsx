import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from '@/components/animated-framer-wrapper';

interface ProjectItemProps {
    slug: string
    title: string
    description?: string
    date: string
    image?: string
    tags?: string[]
    background: string
    featured?: boolean
    timeline?: string
    index: number
}

export default function ProjectItem({ slug, title, description, image, tags, background, timeline, index }: ProjectItemProps) {
    return (
        <AnimatedWrapper variant="subtleFade" delay={0.1 * (index + 1)} duration={0.7}>
            <Card
                className="flex flex-col lg:flex-row-reverse border-0 min-h-[500px] justify-between"
                style={{ backgroundColor: background || '#DFE4EC' }}
            >
                <Link href={`${slug}`} className="w-full lg:w-2/3 flex-shrink-0 cursor-default">
                    <div className="relative w-full h-full flex justify-center items-center p-4 lg:p-8">
                        <div className="relative">
                            {(image && <Image
                                priority
                                alt={title}
                                className="object-cover shadow-xl rounded-lg"
                                width={1280}
                                height={832}
                                quality={100}
                                src={image}
                            />)}
                        </div>
                    </div>
                </Link>
                <div className="lg:w-1/3 flex flex-col justify-between p-4 lg:py-8 lg:px-6">
                    <CardHeader className="mb-6">
                        <CardTitle className="text-2xl xl:text-3xl font-extrabold text-gray-900">{title}</CardTitle>
                        <div className="w-16 border-t border-gray-500"/>
                        <CardDescription className="text-base xl:text-lg font-light text-singleCard-foreground mt-2 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                            {description}
                        </CardDescription>
                        {(timeline || tags) && (
                            <div className="!mt-9 flex flex-row lg:!mt-12 lg:flex-col">
                                {timeline && (
                                    <dl className="mr-10">
                                        <dt className="text-sm text-singleCard-foreground font-light">Project Timeline</dt>
                                        <dd className="text-md text-singleCard-foreground font-normal mb-5">{timeline}</dd>
                                    </dl>
                                )}
                                {tags && tags.length > 0 && (
                                    <dl>
                                        <dt className="text-sm text-singleCard-foreground font-light">Key Terms</dt>
                                        <dd className="text-md text-singleCard-foreground font-normal">{tags.join(', ')}</dd>
                                    </dl>
                                )}
                            </div>
                        )}
                    </CardHeader>
                    <CardFooter className="flex flex-wrap gap-2 mt-4">
                        <Link href={`${slug}`}>
                            <Button variant="noChange" className="px-12 py-2 font-light xl:py-3">Read Case</Button>
                        </Link>
                    </CardFooter>
                </div>
            </Card>
        </AnimatedWrapper>
    );
}
