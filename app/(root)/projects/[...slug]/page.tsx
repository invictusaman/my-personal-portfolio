import { projects } from "#site/content";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProjectPageProps {
    params: {
        slug: string[];
    };
}

async function getProjectFromParams(params: ProjectPageProps["params"]) {
    const slug = params?.slug?.join("/");
    const project = projects.find(project => project.slugAsParams === slug);

    return project;
}

export async function generateStaticParams(): Promise<ProjectPageProps["params"][]> {
    return projects.map(project => ({ slug: project.slugAsParams.split("/") }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await getProjectFromParams(params);

    if (!project || !project.published) {
        notFound();
    }

    return (
        <MaxWidthWrapper className="py-10 md:py-20">
            <article>
                <div className="max-w-[750px] mx-auto">
                    <span className="text-base text-muted-foreground italic">{new Date(project.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric'
                     })}</span>
                    <h1 className="text-3xl md:text-4xl font-extrabold mt-3 mb-1">{project.title}</h1>
                    </div>
                    <div className="max-w-[750px] mx-auto my-10">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_minmax(auto,1fr)] gap-8 items-start relative">
                        {project.description && (
                            <div>
                                <p className="text-lg font-light text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                    {project.description}
                                </p>
                            </div>
                        )}
                        <div className="hidden md:block absolute inset-y-0 left-[73%] w-px bg-gray-200"></div>
                        <div className="md:space-y-4 flex flex-wrap md:flex-col text-lg leading-relaxed font-light">
                            {project.tags && (
                                <div className="flex-1">
                                    <h2 className="font-semibold">Key Terms</h2>
                                    <div className="mt-2 space-y-2">
                                        {project.tags.map(tag => (
                                            <p key={tag} >
                                                {tag}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.timeline && (
                                <div className="flex-1">
                                    <h2 className="font-semibold">Timeline</h2>
                                    <p className="mt-2">{project.timeline || "Not specified"}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {project.image && (
                    <div className="my-8 relative wide-image">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1200}
                            height={675}
                            className="mx-auto object-cover xl:rounded-lg"
                        />
                    </div>
                )}
                <div className="max-w-[750px] mx-auto my-6 font-normal prose-lg md:prose-xl leading-relaxed post-body">
                    <MDXContent code={project.body} />
                </div>
            </article>
        </MaxWidthWrapper>
    );
}
