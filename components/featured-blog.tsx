import { posts } from "#site/content";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { sortPostsByDate } from "@/lib/utils";

export default function BlogsFeaturedPage() {
    const sortedPosts = sortPostsByDate(posts.filter(post => post.published && post.featured));
    return (
        <MaxWidthWrapper className="py-10 md:py-20">
            <div className="my-2 w-24 border-b border-muted-foreground"/>
            <h2 className="text-xl font-bold mb-4" id='blogs-featured'>FEATURED BLOG POSTS</h2>
            <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-8">
                {sortedPosts.map(post => (
                   <article key={post.slug} role="article">
                    <Card
                    className="flex flex-col border-0 min-h-[500px] justify-between"
                    style={{ backgroundColor: post.background || '#DFE4EC' }}
                >
                    <div className="flex flex-col px-6 pb-4 lg:pb-8 lg:px-8">
                        <CardHeader className="mb-6">
                            {post.tags && post.tags.length > 0 && (
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="uppercase text-xs font-light text-singleCard-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <CardTitle className="text-2xl xl:text-3xl font-extrabold text-gray-900">{post.title}</CardTitle>
                            <div className="w-16 border-t border-gray-500"/>
                            <CardDescription className="text-base xl:text-lg font-light text-singleCard-foreground mt-4 leading-relaxed">
                                {post.description}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-wrap justify-between gap-2 mt-2">
                            <div className="flex flex-col">
                                {post.date && (
                                    <time dateTime={post.date} className="text-sm text-singleCard-foreground">
                                        <span className="font-light">Published Date</span>
                                        <br />
                                        <span className="text-md opacity-90 font-medium">
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: '2-digit',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </time>
                                )}
                            </div>
                            <Link href={`${post.slug}`} aria-label={`Read more about ${post.title}`}>
                                <Button variant="noChange" className="px-12 py-2 font-light xl:py-3">Read More</Button>
                            </Link>
                        </CardFooter>
                    </div>
                    {post.image && (
                        <Link href={`${post.slug}`} className="w-full flex-shrink-0 px-6 lg:px-8 cursor-default" aria-label={`View full article about ${post.title}`}>
                            <div className="relative w-full pt-6 overflow-hidden">
                                <Image
                                    alt={post.title}
                                    className="object-cover rounded-tl-lg rounded-tr-lg h-80"
                                    width={1280}
                                    height={832}
                                    src={post.image}
                                    blurDataURL="data:..."
                                    placeholder="blur"
                                />
                            </div>
                        </Link>
                    )}
                </Card>
                     </article>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}
