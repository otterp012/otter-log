import { fireEvent, render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "../../pages/index";
import { allPosts, Post } from "contentlayer/generated";

import React from "react";
import { createMockRouter } from "../../__mock__/next";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { Post as PostType } from "contentlayer/generated";

describe("index page is Rendered", () => {
  it("featuredPost가 렌더링된다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const props = {
      featuredPost: allPosts.find((post) => post.isFeatured) as Post,
      recentPosts: allPosts
        .filter((post) => !post.isFeatured)
        .sort(
          (a, b) =>
            Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
        )
        .slice(0, 3),
    };

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

  it("recentPosts가 최근 순으로 3개 렌더링 된다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const props = {
      featuredPost: allPosts.find((post) => post.isFeatured) as Post,
      recentPosts: allPosts
        .filter((post) => !post.isFeatured)
        .sort(
          (a, b) =>
            Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
        )
        .slice(0, 3),
    };

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
});
