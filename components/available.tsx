import { FileText } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { ContactForm } from "./contact-form";

export default function Available() {
  return (
    <Card className="h-full bg-singleCard text-singleCard-foreground border-0">
      <ContactForm>
        <CardHeader>
          <div className="flex justify-center mb-2">
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400"></span>
            </span>
          </div>
          <CardTitle className="text-center">Give me Projects!</CardTitle>
        </CardHeader>
      </ContactForm>
    </Card>
  );
}
