// 모든페이지에 렌더링되는 layout 컴포넌트 테스트
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { DarkModeProvider } from "store";
import { createMockRouter } from "__mock__";
import { Header } from "./Header";

const setup = () => {
  const router = createMockRouter({ pathname: "/" });
  const view = render(
    <RouterContext.Provider value={router}>
      <Header />
    </RouterContext.Provider>,
    { wrapper: DarkModeProvider },
  );

  const header = () => screen.getByRole("banner");
  const heading = () => screen.getByRole("heading");
  const nav = () => screen.getByRole("navigation");

  return {
    view,
    header,
    heading,
    nav,
  };
};
describe("Header", () => {
  it("문제없이 렌더링 되어야 한다.", () => {
    const { header, heading, nav } = setup();
    expect(header()).toBeInTheDocument();
    expect(heading()).toBeInTheDocument();
    expect(nav()).toBeInTheDocument();
  });

  it("접근성 위반사항이 없어야 한다.", async () => {
    const { view } = setup();
    const { container } = view;
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
