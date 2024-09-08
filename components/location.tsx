import { FileText, Pin } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Location() {
  return (
    <Card className="h-full border-0 bg-singleCard text-singleCard-foreground">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-2 text-md lg:text-lg">
            <Pin size={24} />
            <p>Location</p>
          </div>
        </div>
        <CardDescription className="text-singleCard-foreground text-md lg:text-lg">
          Toronto, Canada
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
