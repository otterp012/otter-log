import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

import { createMockRouter } from "__mock__/next";
import { contentLayerMock } from "__mock__/contentLayer";

import Card from "./Card";

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
    expect(router.push).not.toBeCalled();
  });
});
