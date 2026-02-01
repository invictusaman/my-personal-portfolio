"use client";

import { ClockIcon, InfoIcon } from "lucide-react";
import useSWR from "swr";

import { fetcher } from "@/lib/fetcher";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

type Wakatime = {
  seconds: number;
};

const CodingHours = () => {
  const { data: wakatimeData } = useSWR<Wakatime>("/api/wakatime", fetcher);

  return (
    <Card className="h-full group bg-foreground text-background border-0">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-2 text-md lg:text-lg">
            <ClockIcon size={24} />
            <p>Coding hours</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon size={24} />
              </TooltipTrigger>
              <TooltipContent className="border p-2 bg-background px-3 rounded-md text-md lg:text-lg text-muted-foreground">
                I started tracking my coding hours in Nov 02 2025.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardTitle>
          {wakatimeData
            ? Math.round(wakatimeData.seconds / 60 / 60) + " hrs"
            : "No data"}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CodingHours;
