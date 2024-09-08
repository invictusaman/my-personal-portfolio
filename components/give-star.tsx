"use client";
import { ExternalLink, Star } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";

export default function GiveStar() {
  const { data } = useSWR("/api/github", fetcher);

  return (
    <Card className="h-full group bg-singleCard text-singleCard-foreground border-0">
      <Link href="https://github.com/invictusaman/my-personal-portfolio" target="_blank">
        <CardHeader>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 mb-2 text-md lg:text-lg text-singleCard-foreground">
              <Star
                size={24}
                className="group-hover:text-yellow-400 group-hover:fill-yellow-400 transition-colors"
              />
              <p>Give it a star</p>
            </div>
            <ExternalLink size={24} className="text-singleCard-foreground" />
          </div>
          <CardTitle>{String(data)} stars</CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
}
