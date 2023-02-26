import { act, render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "__mock__/next";
import { Nav } from "./Nav";

const setup = () => {
  const router = createMockRouter({ pathname: "/" });
  const user = userEvent.setup();
  const view = render(
    <RouterContext.Provider value={router}>
      <Nav />
    </RouterContext.Provider>,
  );

  const nav = screen.getByRole("navigation");
  const listBox = screen.getByRole("list");
  const lists = screen.getAllByRole("listitem");
  const links = screen.getAllByRole("link");
  return {
    router,
    user,
    view,
    nav,
    listBox,
    lists,
    links,
  };
};

describe("Nav 컴포넌트", () => {
  it("문제없이 렌더링 되어야 한다.", () => {
    const { nav, listBox } = setup();

    expect(nav).toBeInTheDocument();
    expect(listBox).toBeInTheDocument();
  });

  it("Nav의 link를 클릭하면, 해당 경로로 이동한다.", async () => {
    const { router, links, user } = setup();
    const [postLink, bookLink] = links;

    await user.click(postLink);

    expect(router.push).toHaveBeenCalledWith("/post", "/post", {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });

    await user.click(bookLink);

    expect(router.push).toHaveBeenCalledWith("/book", "/book", {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });
});
