import ReactMarkdown from "react-markdown";
import Image from "next/future/image";
import slug from "remark-slug";

import { CodeBlock } from "./CodeBlock";

import { getRevisedImageUrl } from "lib/utils";

export const MarkDown = ({ markdownString }: { markdownString: string }) => {
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
        h2: "h3",
        h3: "h4",
      }}
      remarkPlugins={[slug]}
    >
      {markdownString}
    </ReactMarkdown>
  );
};
