import * as runtime from "react/jsx-runtime"
import { cn } from "@/lib/utils"
import { Callout } from "./callout"
import { Button } from "./ui/button"
import Image, { ImageProps } from 'next/image'
import { FC } from "react"

const useMDXComponent = (code: string) => {
    const fn = new Function(code)
    return fn({ ...runtime }).default
}

const FullImage: FC<ImageProps> = (props) => (
    <div className="full-width-image">
        <Image {...props} layout="responsive" />
    </div>
);

const WideImage: FC<ImageProps> = (props) => (
    <div className="wide-image">
        <Image {...props} className='mx-auto' />
    </div>
);


const components = {
    Image,
    FullImage: FullImage,
    WideImage: WideImage,
    Button,
    Callout,
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
        <pre
          {...props}
          className={cn(
            "overflow-x-auto rounded-lg p-4 font-mono !prose-base md:!prose-lg",
            props.className
          )}
        >
          {children}
        </pre>
      ),
      code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
        if (typeof children === 'string') {
          // Inline code
          return <code {...props} className={cn("px-1 py-0.5 rounded-md bg-muted", props.className)}>{children}</code>;
        }
        // Block code (already processed by rehype-pretty-code)
        return <code {...props}>{children}</code>;
      },
    h1: (props: any) => <h1 {...props} className={cn("text-4xl font-bold", props.className)} />,
    h2: (props: any) => <h2 {...props} className={cn("text-3xl font-bold", props.className)} />,
    h3: (props: any) => <h3 {...props} className={cn("text-2xl font-bold", props.className)} />,
    h4: (props: any) => <h4 {...props} className={cn("text-xl font-bold", props.className)} />,
    h5: (props: any) => <h5 {...props} className={cn("text-lg font-bold", props.className)} />,
    ul: (props: any) => <ul {...props} className={cn("list-disc", props.className)} />,
    li: (props: any) => <li {...props} className={cn("ml-4", props.className)} />,
    ol: (props: any) => <ol {...props} className={cn("list-decimal", props.className)} />,
    p: (props: any) => <p {...props} className={cn(" ", props.className)} />
}

interface MdxProps {
    code: string
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return <Component components={components} />
}
