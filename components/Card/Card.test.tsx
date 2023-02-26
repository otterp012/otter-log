import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { createMockRouter, cardMock } from "__mock__";

import { RouterContext } from "next/dist/shared/lib/router-context";
import { Card, Cards } from "./Card";

const setup = () => {
  const cardData = cardMock[0];
  const router = createMockRouter({ pathname: "/" });
  const view = render(
    <RouterContext.Provider value={router}>
      <Card {...cardData} />
    </RouterContext.Provider>,
  );

  const user = userEvent.setup();
  const heading = () => screen.getByRole("heading");
  const description = () =>
    screen.getByText(/Image 컴포넌트로, 이미지를 최적화하기/);
  const link = () =>
    screen.getByRole("link", {
      name: "Next/Image로 이미지 최적화 적용하기",
    });
  const tags = () =>
    screen.getAllByRole("link", {
      name: /^#/,
    });
  const img = () => screen.getByRole("img");

  return {
    view,
    heading,
    description,
    link,
    tags,
    img,
    router,
    user,
    cardData,
  };
};

describe("Card Component", () => {
  it("문제없이 렌더링이 되어야 한다.", async () => {
    const { heading, description, link, tags, img } = setup();

    expect(heading()).toBeInTheDocument();
    expect(description()).toBeInTheDocument();
    expect(link()).toBeInTheDocument();
    tags().forEach((tag) => expect(tag).toBeInTheDocument());
    expect(img()).toBeInTheDocument();
  });

  it("link를 누르면, post 페이지의 해당 페이지로 이동해야 한다.", async () => {
    const { link, router, user, cardData } = setup();

    await user.click(link());
    expect(router.push).toHaveBeenCalledWith(
      `/post/${cardData.slug}`,
      `/post/${cardData.slug}`,
      { locale: undefined, scroll: undefined, shallow: undefined },
    );
  });
});

describe("Cards Component", () => {
  it("Cards 컴포넌트는 배열에 담겨진 수만큼 Card 컴포넌트를 렌더링한다.", async () => {
    render(<Cards posts={cardMock} />);
    const cards = screen.getAllByRole("listitem");

    expect(cards.length).toBe(cardMock.length);
  });

  it("접근성 위반 사항이 없어야 한다.", async () => {
    const { container } = render(<Cards posts={cardMock} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
