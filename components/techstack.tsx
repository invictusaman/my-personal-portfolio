"use client";
import { useEffect, useState } from "react";
import {
  FileCode,
  FileText,
  Github,
  LinkIcon,
  Linkedin,
  Mail,
  MailIcon,
} from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { TECH_STACK } from "@/config";

const colors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-indigo-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-orange-400",
  "bg-cyan-400",
  "bg-rose-400",
  "bg-fuchsia-400",
  "bg-violet-400",
  "bg-emerald-400",
  "bg-teal-400",
  "bg-red-600",
  "bg-green-600",
  "bg-pink-600",
  "bg-purple-600",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function TechStack() {
  const [techColors, setTechColors] = useState<string[]>([]);

  useEffect(() => {
    const generatedColors = TECH_STACK.map(() => getRandomColor());
    setTechColors(generatedColors);
  }, []);

  return (
    <Card className="h-full border-0 bg-singleCard text-singleCard-foreground">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-2 text-md lg:text-lg">
            <FileCode size={24} />
            <p>Techstack</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {TECH_STACK.map((tech, index) => (
            <Link
              className="cursor-default"
              href={tech.href}
              key={tech.title}
              target="_blank"
              rel="nofollow noopener"
            >
              <Badge
                variant="secondary"
                className="bg-[hsl(215_24%_80%)] text-singleCard-foreground text-sm lg:text-md hover:bg-[hsl(215_24%_70%)]"
              >
                <div
                  className={`${techColors[index] || "bg-cyan-400"} w-4 h-4 mr-2 rounded-full`}
                />
                {tech.title}
              </Badge>
            </Link>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}
