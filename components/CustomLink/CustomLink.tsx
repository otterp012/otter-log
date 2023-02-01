import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
  style?: string;
  children: React.ReactNode;
  onClickHandler?: () => void;
}

const CustomLink: React.FC<Props> = (props) => {
  const { style, children, onClickHandler, ...restProps } = props;
  if (onClickHandler) {
    return (
      <Link {...restProps}>
        <a className={style} onClick={onClickHandler}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <Link {...restProps}>
      <a className={style}>{children}</a>
    </Link>
  );
};

export default CustomLink;
