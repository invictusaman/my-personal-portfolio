import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Post, Project } from "#site/content"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
    return new Date(input).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
}

export function sortPostsByDate(posts: Array<Post>): Array<Post> {
    return posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}

// New Function to sort projects by date
export function sortProjectsByDate(projects: Array<Project>): Array<Project> {
    return projects.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}
