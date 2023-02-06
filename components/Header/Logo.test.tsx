import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "__mock__/next";

import { Logo } from "./Logo";

it("Logo를 클릭하면, 메인페이지('/')로 이동한다.", async () => {
  // arrange
  const router = createMockRouter({ pathname: "/search" });

  render(
    <RouterContext.Provider value={router}>
      <Logo />
    </RouterContext.Provider>,
  );

  const Title = screen.getByRole("link", { name: /otter-log/i });

  // act
  fireEvent.click(Title);

  // assert
  expect(router.push).toHaveBeenCalledWith("/", "/", {
    locale: undefined,
    scroll: undefined,
    shallow: undefined,
  });
});
