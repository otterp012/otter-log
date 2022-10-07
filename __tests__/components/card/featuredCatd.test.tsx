import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRouter } from "../../../__mock__/next";
import { RouterContext } from "next/dist/shared/lib/router-context";

import FeaturedCard from "backups/featuredCard";
import { allPosts, Post } from "contentlayer/generated";

describe("featuredPost", () => {
  it("featuredPost의 이미지나 타이틀을 누르면 해당 링크로 이동한다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const data = allPosts.find((post) => post.isFeatured) as Post;
    const { title, description, thumbnailImg, slug } = data;
    const path = `/${slug}`;

    render(
      <RouterContext.Provider value={router}>
        <FeaturedCard
          title={title}
          description={description}
          thumbnailImg={thumbnailImg}
          slug={slug}
        />
      </RouterContext.Provider>,
    );

    const Title = screen.getByRole("heading", {
      level: 2,
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

  it("featuredPost의 이미지와 타이틀을 제외한 영역은 클릭해도 페이지 이동이 일어나지 않는다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const data = allPosts.find((post) => post.isFeatured) as Post;
    const { title, description, thumbnailImg, slug, publishedAt } = data;

    render(
      <RouterContext.Provider value={router}>
        <FeaturedCard
          title={title}
          description={description}
          thumbnailImg={thumbnailImg}
          slug={slug}
          publishedAt={publishedAt}
        />
      </RouterContext.Provider>,
    );

    const Paragraph = screen.getByText(description);
    const Time = screen.getByText(publishedAt);

    fireEvent.click(Paragraph);
    fireEvent.click(Time);
    expect(router.push).not.toBeCalled();
  });
});
