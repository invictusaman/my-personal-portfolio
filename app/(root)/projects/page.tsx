import { projects } from "#site/content"
import MaxWidthWrapper from "@/components/max-width-wrapper"
import ProjectItem from "./_components/project-item"
import { sortProjectsByDate } from "@/lib/utils"
import SideProjects from "@/components/side-projects"

export default function ProjectsPage() {
    const sortedProjects = sortProjectsByDate(projects.filter(project => project.published))
    return (
        <div>
            <MaxWidthWrapper className="py-10 md:py-20">
                <div className="my-2 w-24 border-b border-muted-foreground"/>
                <h2 className="text-xl font-bold mb-4" id='#projects'>PROJECTS</h2>
                <div className="flex flex-col gap-14">
                    {sortedProjects.map((project, index) => (
                        <ProjectItem
                            key={project.slug}
                            slug={project.slug}
                            title={project.title}
                            description={project.description ? project.description : ""}
                            date={project.date}
                            image={project.image ? project.image : ""}
                            tags={project.tags ? project.tags : []}
                            background={project.background ? project.background : ""}
                            timeline={project.timeline ? project.timeline : ""}
                            featured={project.featured}
                            index={index}
                        />
                    ))}
                </div>
            </MaxWidthWrapper>
            <SideProjects/>
       </div>
    )
}
