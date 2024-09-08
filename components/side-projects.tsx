import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { SIDE_PROJECTS } from "@/config";
import Link from "next/link";
import GithubLink from "./github-link";

export default function SideProjects() {
  return (
    <MaxWidthWrapper className="pb-10 md:pb-20">
      <div className="my-2 w-24 border-b border-muted-foreground"/>
      <h2 className="text-xl font-bold mb-4" id='#project-study'>SIDE PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SIDE_PROJECTS.map((project) => (
          <Card className="h-full group" key={project.title}>
            <div className="p-4">
              <Link href={project.href}>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    alt="Image"
                    className="group-hover:scale-105 transition-all"
                    width={1280}
                    height={832}
                    quality={100}
                    src={project.image}
                  />
                </div>
              </Link>
            </div>
            <CardHeader className="pt-0 pb-3">
              <CardTitle>
                <div className="flex gap-2 items-center">
                  <Link href={project.href}>{project.title}</Link>
                  {project.github && <GithubLink link={project.github} />}
                </div>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              {project.tags.map((tag) => (
                <Badge variant="outline" key={tag}>
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
