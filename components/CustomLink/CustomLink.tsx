import Link, { LinkProps } from "next/link";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const CustomLink = (props: CustomLinkProps) => {
  const { children, className, title, ...restProps } = props;

  return (
    <Link {...restProps} passHref>
      <a className={className} title={title} aria-label={title}>
        {children}
      </a>
    </Link>
  );
};
