import { posts } from "#site/content"
import MaxWidthWrapper from "@/components/max-width-wrapper"
import { MDXContent } from "@/components/mdx-components"
import { notFound } from "next/navigation"
import Image from "next/image";

interface BlogPageProps {
    params: {
        slug: string[]
    }
}

async function getPostFromParams(params: BlogPageProps["params"]) {
    const slug = params?.slug?.join("/")
    const post = posts.find(post => post.slugAsParams === slug)

    return post
}

export async function generateStaticParams(): Promise<BlogPageProps["params"][]> {
    return posts.map(post => ({ slug: post.slugAsParams.split("/") }))
}
export default async function BlogPage({ params }: BlogPageProps) {
    const post = await getPostFromParams(params)

    if (!post || !post.published) {
        notFound()
    }

    return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <article>
        <div className="max-w-[700px] mx-auto">
        <span className="text-base text-muted-foreground italic">{new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: '2-digit',
                                            year: 'numeric'
                                         })}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-3 mb-1">{post.title}</h1>
        <p className="text-lg lg:text-lg font-light text-muted-foreground mt-4 leading-relaxed">{post.description}</p>
        <div className="my-4">
          {post.tags && (
            <div className="mt-2">
              {post.tags.map(tag => (
                <span key={tag} className="inline-block bg-gray-200 text-gray-800 text-sm py-1 px-3 rounded-full mr-2">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
       </div>
        {post.image && (
        <div className="my-8 relative wide-image">
            <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={675}
            className="mx-auto object-cover xl:rounded-lg"
            />
        </div>
        )}
       <div className="max-w-[750px] mx-auto my-6 font-normal prose-lg md:prose-xl leading-relaxed post-body">
        <MDXContent code={post.body} />
       </div>
      </article>
   </MaxWidthWrapper>
    )
}
