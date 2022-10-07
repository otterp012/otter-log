export const linkHandler = (
  e: React.MouseEvent<HTMLAnchorElement>,
  slug: string,
) => {
  e.preventDefault();
  document &&
    document.getElementById(slug)?.scrollIntoView({
      behavior: "smooth",
    });
};
