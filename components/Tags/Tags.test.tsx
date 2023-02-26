import { render, screen } from "@testing-library/react";
import { Tags } from "./Tags";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "__mock__";
import { axe } from "jest-axe";

const renderTags = () => {
  const user = userEvent.setup();
  const router = createMockRouter({ pathname: "/" });
  const view = render(
    <RouterContext.Provider value={router}>
      <Tags tags={["react", "javascript", "unable"]} />
    </RouterContext.Provider>,
  );

  const links = screen.getAllByRole("link");
  return {
    links,
    router,
    user,
    view,
  };
};
describe("Tags Component", () => {
  it("문제 없이 렌더링 되어야 한다.", () => {
    const { links } = renderTags();

    links.forEach((link) => expect(link).toBeInTheDocument());
  });

  it("접근성 위반 사항이 없어야 한다.", async () => {
    const { view } = renderTags();
    const results = await axe(view.container);
    expect(results).toHaveNoViolations();
  });

  it("태그를 클릭하면, 허용되지 않는 태그는 post 페이지의 others 쿼리로 이동된다.", async () => {
    const { links, router, user } = renderTags();
    const [, , unable] = links;

    await user.click(unable);
    expect(router.push).toHaveBeenCalledWith(
      "/post?filterBy=others",
      "/post?filterBy=others",
      { locale: undefined, scroll: undefined, shallow: undefined },
    );
  });

  it("태그를 클릭하면, 허용되는 태그는 post 페이지의 해당 쿼리로 이동된다.", async () => {
    const user = userEvent.setup();

    const { links, router } = renderTags();
    const [react, javascript] = links;

    await user.click(react);
    expect(router.push).toHaveBeenCalledWith(
      "/post?filterBy=react",
      "/post?filterBy=react",
      { locale: undefined, scroll: undefined, shallow: undefined },
    );

    await user.click(javascript);

    expect(router.push).toHaveBeenCalledWith(
      "/post?filterBy=javascript",
      "/post?filterBy=javascript",
      { locale: undefined, scroll: undefined, shallow: undefined },
    );
  });
});
