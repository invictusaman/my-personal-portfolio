import { CoffeeIcon, Github, LinkIcon, Linkedin, MailIcon } from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import Link from "next/link";

export default function Connect() {
  return (
    <Card className="h-full bg-singleCard text-singleCard-foreground border-0">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-2 text-md lg:text-lg">
            <LinkIcon size={24} />
            <p>Connect with me</p>
          </div>
        </div>
        <div className="flex flex-col text-md lg:text-lg gap-2 *:text-singleCard-foreground *:flex *:items-center">
          <Link href="https://github.com/invictusaman" target="_blank" rel="noopener noreferrer">
            <Github size={20} className="mr-3" />
            invictusaman
          </Link>
          <Link
            href="https://www.kaggle.com/amanbhattarai695"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-3" fill="none" stroke="currentColor" strokeWidth="5px" viewBox="0 0 32 32"><defs><clipPath id="A"><use xlinkHref="#B"/></clipPath><path id="B" d="M31.5 15.978h289v130.044h-289z"/></defs><path transform="matrix(.527027 0 0 .527027 -30.632288 -22.45559)" clipPath="url(#A)" d="M105.75 102.968c-.06.238-.298.357-.713.357H97.1c-.477 0-.89-.208-1.248-.625L82.746 86.028l-3.655 3.477v12.93c0 .595-.298.892-.892.892h-6.152c-.595 0-.892-.297-.892-.892V43.5c0-.593.297-.89.892-.89H78.2c.594 0 .892.298.892.89v36.288l15.692-15.87c.416-.415.832-.624 1.248-.624h8.204c.356 0 .593.15.713.445.12.357.09.624-.09.803L88.274 80.588l17.297 21.488c.237.238.297.535.18.892"/></svg>
            amanbhattarai695
          </Link>
          <Link href="https://www.linkedin.com/in/amanbhattarai" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} className="mr-3" />
            Aman Bhattarai
          </Link>
          <Link href="https://twitter.com/twistblogg" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="size-[18px] mr-3"
            >
              <title>X</title>
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
            </svg>
            @amanbhattarai
          </Link>
          <Link href="https://buymeacoffee.com/twistblogg" target="_blank" rel="noopener noreferrer">
            <CoffeeIcon size={20} className="mr-3" />
            Buy me a coffee
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
}
