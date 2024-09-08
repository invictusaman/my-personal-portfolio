import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from '@/components/animated-framer-wrapper';


interface PostItemProps {
    slug: string
    title: string
    description?: string
    date: string
    image?: string
    tags?: string[]
    background: string
}

export default function PostItem({ slug, title, description, date, image, tags, background}: PostItemProps) {
    return (
        <AnimatedWrapper variant="softExpand" delay={0.2} duration={0.7}>
        <article key={slug} className="mansory-item">
                    <Card
                    key={slug}
                    className="flex flex-col border-0 min-h-[200px] justify-between"
                    style={{ backgroundColor: background || '#DFE4EC' }}
                >
                    <div className="flex flex-col px-6 pb-4 lg:pb-8 lg:px-8">
                        <CardHeader className="mb-6">
                            {tags && tags.length > 0 && (
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {tags.map(tag => (
                                            <span key={tag} className="uppercase text-xs font-light text-singleCard-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <CardTitle className="text-2xl xl:text-3xl font-extrabold text-singleCard-foreground">{title}</CardTitle>
                            <div className="w-16 border-t border-gray-500"/>
                            <CardDescription className="text-base xl:text-lg font-light text-singleCard-foreground mt-4 leading-relaxed">
                                {description}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-wrap justify-between gap-2 mt-2">
                            <div className="flex flex-col">
                                {date && (
                                    <dl>
                                        <dt className="text-sm text-singleCard-foreground font-light">Published Date</dt>
                                          <dd className="text-md text-singleCard-foreground opacity-90 font-medium">{new Date(date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: '2-digit',
                                            year: 'numeric'
                                         })}</dd>
                                    </dl>
                                )}
                            </div>
                            <Link href={`${slug}`}>
                                <Button variant="noChange" className="px-12 py-2 font-light xl:py-3">Read More</Button>
                            </Link>
                        </CardFooter>
                    </div>
                    {image && (
                        <Link href={`${slug}`} className="w-full flex-shrink-0 px-6 lg:px-8 cursor-default">
                            <div className="relative w-full pt-6 overflow-hidden">
                                <Image
                                    priority
                                    alt={title}
                                    className="object-cover rounded-tl-lg rounded-tr-lg h-80"
                                    width={1280}
                                    height={832}
                                    quality={100}
                                    src={image}
                                />
                            </div>
                        </Link>
                    )}
                </Card>
          </article>
        </AnimatedWrapper>
    )
}
