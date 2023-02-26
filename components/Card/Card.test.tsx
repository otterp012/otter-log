import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { createMockRouter } from "__mock__";

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

const cardMock = [
  {
    description: "Image 컴포넌트로, 이미지를 최적화하기",
    formattedDate: "2023년 2월 22일",
    id: "e9bd85b7-18fa-449b-9ef3-2ae1951a89ac",
    lastEditDate: new Date("2023-02-22"),
    lastEditFormattedDate: "2023년 2월 22일",
    slug: "next-image-component",
    tags: ["next", "optimization"],
    thumbnailImg:
      "http://res.cloudinary.com/ddzuhs646/image/upload/v1677056698/blog/e9bd85b7-18fa-449b-9ef3-2ae1951a89ac/e9bd85b718fa449b9ef32ae1951a89ac.png",
    title: "Next/Image로 이미지 최적화 적용하기",
  },
  {
    id: "230c3473-49b4-49cf-aca7-41fd495fd658",
    title: "Read More 버튼과 검색 최적화",
    description: "클립 패턴을 사용해, 검색 최적화 문제 해결하기",
    thumbnailImg:
      "http://res.cloudinary.com/ddzuhs646/image/upload/v1676378806/blog/230c3473-49b4-49cf-aca7-41fd495fd658/230c347349b449cfaca741fd495fd658.png",
    slug: "seo-clip-pattern",
    tags: ["seo", "css"],
    formattedDate: "2023년 2월 5일",
    lastEditDate: new Date("2023-02-05"),
    lastEditFormattedDate: "2023년 2월 5일",
  },
  {
    id: "d4fb708c-de37-4184-9cb3-e93b835be972",
    title: "번들 사이즈 개선하기",
    description: "next 번들 사이즈 줄여 성능 최적화 하기",
    thumbnailImg:
      "http://res.cloudinary.com/ddzuhs646/image/upload/v1675679447/blog/d4fb708c-de37-4184-9cb3-e93b835be972/d4fb708cde3741849cb3e93b835be972.png",
    slug: "next-optimization-bundle",
    tags: ["next", "optimization"],
    formattedDate: "2023년 2월 5일",
    lastEditDate: new Date("2023-02-05"),
    lastEditFormattedDate: "2023년 2월 5일",
  },
];
