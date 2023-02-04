import Link, { LinkProps } from "next/link";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const CustomLink = (props: CustomLinkProps) => {
  const { children, className, ...restProps } = props;

  return (
    <Link {...restProps} passHref>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default CustomLink;
