import ReactMarkdown from "react-markdown";
import slug from "remark-slug";
import Image from "next/future/image";
import { getRevisedImageUrl } from "lib/utils";
import { CodeBlock } from "./CodeBlock";

const MarkDown = ({ markdownString }: { markdownString: string }) => {
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
          const revisedUrl = getRevisedImageUrl({
            src: props.src as string,
            height: 800,
            width: "auto",
          });
          return <Image src={revisedUrl} width={1000} height={1000} alt='' />;
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
      {markdownString}
    </ReactMarkdown>
  );
};

export { MarkDown };
