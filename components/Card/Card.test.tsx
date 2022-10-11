import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

import { createMockRouter } from "__mock__/next";

import Card from "./Card";
import { contentLayerMock } from "__mock__/contentLayer";
// content-layer의 관련 테스트를 데브에서 진행하려면,
// otter-log/.contentlayer/generated/index.mjs
// 파일의 isType을 주석처리해줘야 아래 테스트가 성공합니다. (컨텐트레이어 관련한 오류)

describe("Card", () => {
  const { title, description, thumbnailImg, slug, tags } =
    contentLayerMock.card;

  it("Card 컴포넌트의 이미지나 타이틀을 누르면 해당 링크로 이동한다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const path = `/${slug}`;

    render(
      <RouterContext.Provider value={router}>
        <Card
          title={title}
          description={description}
          thumbnailImg={thumbnailImg}
          slug={slug}
          tags={tags}
          cardType='verticalCard'
        />
      </RouterContext.Provider>,
    );

    const Title = screen.getByRole("heading", {
      level: 3,
      name: title,
    });

    const Image = screen.getByRole("img", {
      name: title,
    });

    fireEvent.click(Title);
    expect(router.push).toHaveBeenCalledWith(path, path, {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });

    await router.push("/");

    fireEvent.click(Image);
    expect(router.push).toHaveBeenCalledWith(path, path, {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });

  it("Card 이미지와 타이틀을 제외한 영역은 클릭해도 페이지 이동이 일어나지 않는다.", async () => {
    const router = createMockRouter({ pathname: "/" });

    render(
      <RouterContext.Provider value={router}>
        <Card
          title={title}
          description={description}
          thumbnailImg={thumbnailImg}
          slug={slug}
          tags={tags}
          cardType='verticalCard'
        />
      </RouterContext.Provider>,
    );

    const Paragraph = screen.getByText(description);

    fireEvent.click(Paragraph);
    expect(router.push).toBeCalled();
  });
});
