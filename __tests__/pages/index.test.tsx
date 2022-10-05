import { fireEvent, render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "../../pages/index";

import React from "react";
import { createMockRouter } from "../../__mock__/next";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { Post as PostType } from "contentlayer/generated";

describe("featured Post", () => {
  it("featuredPost가 렌더링된다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const { props } = await getStaticProps();

    render(
      <RouterContext.Provider value={router}>
        <Home {...props} />
      </RouterContext.Provider>,
    );

    const { featuredPost } = props;
    const Title = screen.getByRole("heading", {
      level: 2,
      name: featuredPost.title,
    });

    const Image = screen.getByRole("img", {
      name: featuredPost.title,
    });

    const Paragraph = screen.getByText(featuredPost.description);
    expect(Title).toBeInTheDocument();
    expect(Image).toBeInTheDocument();
    expect(Paragraph).toBeInTheDocument();
  });

  it("featuredPost의 이미지나 타이틀을 누르면 해당 링크로 이동한다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const { props } = await getStaticProps();

    render(
      <RouterContext.Provider value={router}>
        <Home {...props} />
      </RouterContext.Provider>,
    );

    const { featuredPost } = props;
    const { path } = featuredPost;

    const Title = screen.getByRole("heading", {
      level: 2,
      name: featuredPost.title,
    });

    const Image = screen.getByRole("img", {
      name: featuredPost.title,
    });

    fireEvent.click(Image);
    expect(router.push).toHaveBeenCalledWith(path, path, {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
    // todo path가 2번나오는 문제
    await router.push("/");

    fireEvent.click(Title);
    expect(router.push).toHaveBeenCalledWith(path, path, {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });
});

describe("recent Posts", () => {
  it("recentPosts가 최근 순으로 3개 렌더링 된다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const { props } = await getStaticProps();

    render(
      <RouterContext.Provider value={router}>
        <Home {...props} />
      </RouterContext.Provider>,
    );

    const { recentPosts } = props;
    const Title = screen.getAllByRole("heading", {
      level: 3,
    });

    const dates = recentPosts.map((post: PostType) => post.publishedAt);
    const sorted = dates.sort(
      (a: string, b: string) => Number(new Date(a)) - Number(new Date(b)),
    );

    expect(recentPosts).toHaveLength(3);
    expect(Title).toHaveLength(3);
    expect(dates).toEqual(sorted);
  });

  it("recentPosts를 누르면 각각의 링크로 이동한다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const { props } = await getStaticProps();

    render(
      <RouterContext.Provider value={router}>
        <Home {...props} />
      </RouterContext.Provider>,
    );
    const { recentPosts } = props;
    const Title = screen.getAllByRole("heading", {
      level: 3,
    });

    fireEvent.click(Title[0]);
    const { path: firstPath } = recentPosts[0];
    expect(router.push).toHaveBeenCalledWith(firstPath, firstPath, {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });

    await router.push("/");

    fireEvent.click(Title[1]);
    const { path: secondPath } = recentPosts[1];
    expect(router.push).toHaveBeenCalledWith(secondPath, secondPath, {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });
});
