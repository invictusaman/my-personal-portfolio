import { posts } from "#site/content"
import MaxWidthWrapper from "@/components/max-width-wrapper"
import PostItem from "./_components/post-item"
import { sortPostsByDate } from "@/lib/utils"

export default function BlogsPage() {
    const sortedPosts = sortPostsByDate(posts.filter(post => post.published))
    return (
        <MaxWidthWrapper className="py-10 md:py-20">
            <h2 className="text-4xl font-bold">Blog</h2>
            <p className="text-muted-foreground mt-1 mb-4">A collection of thoughts and ideas.</p>
            <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            {sortedPosts.map(post => {
                return(
                <PostItem
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    description={post.description ? post.description : ""}
                    date={post.date}
                    image={post.image ? post.image : ""}
                    tags={post.tags ? post.tags : []}
                    background={post.background ? post.background : ""}
                />
                );
            }
            )}
            </div>
        </MaxWidthWrapper>
    )
}
