import ReactMarkdown from "react-markdown";
import Image from "next/future/image";
import slug from "remark-slug";

import { CodeBlock } from "./CodeBlock";

export const MarkDown = ({ markDownString }: { markDownString: string }) => {
  return (
    <ReactMarkdown
      className='markdown'
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <CodeBlock
              code={String(children).replace(/\n$/, "")}
              language={match[1]}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        img: ({ node, ...props }) => {
          return (
            <Image
              src={props.src as string}
              alt=''
              width={900}
              height={300}
              sizes='70vw'
              priority={true}
            />
          );
        },
        a: ({ node, ...props }) => {
          return (
            <a href={props.href} target='_blank' rel='noreferrer'>
              {props.children}
            </a>
          );
        },
        h2: "h3",
        h3: "h4",
      }}
      remarkPlugins={[slug]}
    >
      {markDownString}
    </ReactMarkdown>
  );
};
