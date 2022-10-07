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

export const scrollTopHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
