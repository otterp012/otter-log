import { fireEvent, render, RenderResult } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

import { createMockRouter } from "__mock__/next";

import { Card } from "./Card";

describe("Card Component", () => {
  let rendered: RenderResult;
  let router;

  beforeEach(() => {
    // arrange
    router = createMockRouter({ pathname: "/" });
    rendered = render(
      <RouterContext.Provider value={router}>
        <MockCard />
      </RouterContext.Provider>,
    );
  });

  it("Card 컴포넌트가 문제없이 렌더링 되어야 한다.", () => {
    const Title = rendered.getByRole("heading");
    const Des = rendered.getByText(mockData.description);
    const Link = rendered.getByText(/Read More/i);

    expect(Title).toBeInTheDocument();
    expect(Des).toBeInTheDocument();
    expect(Link).toBeInTheDocument();
  });

  it("Card 컴포넌트의 `Read More` Link를 누르면, post페이지의 slug로 이동한다.", () => {
    // arrange
    const Link = rendered.getByText(/Read More/i);

    // act
    fireEvent.click(Link);

    // assert
    expect(router.push).toBeCalled();
    expect(router.push).toHaveBeenCalledWith(
      "/post/" + mockData.slug,
      "/post/" + mockData.slug,
      {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      },
    );
  });
});

const mockData = {
  id: "b5c38b09-08b8-4bb7-ad04-9bdb98dea672",
  cover:
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2a0d6d3a-bfb3-493e-b502-6b3aa81c7650/image_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T065231Z&X-Amz-Expires=3600&X-Amz-Signature=004a851cfcb2e4c590024baa098f82913b537ccf0e5b05d85ce33be1a9445c4f&X-Amz-SignedHeaders=host&x-id=GetObject",
  title: "자바스크립트 이벤트 루프",
  tags: ["javascript", "async"],
  description: "자바스크립트 이벤트 루프에 관련하여",
  date: "2023년 1월 3일",
  last_edit: "2023년 1월 3일",
  slug: "js-eventloop",
};

const MockCard = () => {
  return (
    <Card
      title={mockData.title}
      description={mockData.description}
      thumbnailImg={mockData.cover}
      slug={mockData.slug}
      tags={mockData.tags}
    />
  );
};
