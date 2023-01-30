import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import slug from "remark-slug";

const CodeBlock = ({ language, code }: { language: string; code: string }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag='div'>
      {code}
    </SyntaxHighlighter>
  );
};

const MarkDown = ({ markdownString }: { markdownString: string }) => {
  return (
    <ReactMarkdown
      className='prose-code:none prose max-w-full select-text dark:prose-invert lg:mt-5 lg:max-w-[75%]'
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
      }}
      remarkPlugins={[slug]}
    >
      {markdownString}
    </ReactMarkdown>
  );
};

export default MarkDown;
