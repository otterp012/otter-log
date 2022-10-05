import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRouter } from "../../__mock__/next";
import { RouterContext } from "next/dist/shared/lib/router-context";

import Logo from "../../components/layout/header/logo";

it("Logo를 클릭하면, 메인페이지('/')로 이동한다.", async () => {
  const router = createMockRouter({ pathname: "/search" });

  render(
    <RouterContext.Provider value={router}>
      <Logo />
    </RouterContext.Provider>,
  );

  const Title = screen.getByRole("link", { name: /otter-log/i });
  fireEvent.click(Title);
  expect(router.push).toHaveBeenCalledWith("/", "/", {
    locale: undefined,
    scroll: undefined,
    shallow: undefined,
  });

  router.push("/post");

  fireEvent.click(Title);
  expect(router.push).toHaveBeenCalledWith("/", "/", {
    locale: undefined,
    scroll: undefined,
    shallow: undefined,
  });
});
