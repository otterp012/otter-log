import Link from "next/link";

type Props = {
  href: string;
  style?: string;
  children: React.ReactNode;
  onClickHandler?: () => void;
  options?: Record<string, string>;
};

const CustomLink: React.FC<Props> = ({
  href,
  style,
  children,
  onClickHandler,
  options,
}) => {
  if (onClickHandler) {
    return (
      <Link href={href} passHref {...options}>
        <a className={style} onClick={onClickHandler}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <Link href={href} passHref>
      <a className={style}>{children}</a>
    </Link>
  );
};

export default CustomLink;
