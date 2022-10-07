import Link from "next/link";

type Props = {
  href: string;
  style?: string;
  children: React.ReactNode;
  options?: Record<string, string>;
  onClickHandler?: () => void;
  eventHandler?: (e: React.MouseEvent) => void;
};

const CustomLink: React.FC<Props> = ({
  href,
  style,
  children,
  options,
  onClickHandler,
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
