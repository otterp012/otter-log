import { render, screen } from "@testing-library/react/pure";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "__mock__";

import { Logo } from "./Logo";

it("Logo를 클릭하면, 메인페이지('/')로 이동한다.", async () => {
  // arrange
  const router = createMockRouter({ pathname: "/" });
  const user = userEvent.setup();
  render(
    <RouterContext.Provider value={router}>
      <Logo />
    </RouterContext.Provider>,
  );

  const Title = screen.getByRole("link", { name: /otter-log/i });

  // act
  await user.click(Title);

  // assert
  expect(router.push).toHaveBeenCalledWith("/", "/", {
    locale: undefined,
    scroll: undefined,
    shallow: undefined,
  });
});
