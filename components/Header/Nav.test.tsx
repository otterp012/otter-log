import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "__mock__/next";

import Nav from "./Nav";

it("Nav의 각 링크를 누르면 해당 페이지로 이동한다.", async () => {
  const router = createMockRouter({ pathname: "/" });

  render(
    <RouterContext.Provider value={router}>
      <Nav />
    </RouterContext.Provider>,
  );

  const SearchLink = screen.getByRole("link", { name: /search/i });
  const ProjectsLink = screen.getByRole("link", { name: /projects/i });
  const PostLink = screen.getByRole("link", { name: /post/i });

  fireEvent.click(SearchLink);

  expect(router.push).toHaveBeenCalledWith("/search", "/search", {
    locale: undefined,
    scroll: undefined,
    shallow: undefined,
  });

  fireEvent.click(ProjectsLink);
  expect(router.push).toHaveBeenCalledWith("/projects", "/projects", {
    locale: undefined,
    scroll: undefined,
    shallow: undefined,
  });

  fireEvent.click(PostLink);
  expect(router.push).toHaveBeenCalledWith("/post", "/post", {
    locale: undefined,
    scroll: undefined,
    shallow: undefined,
  });
});
