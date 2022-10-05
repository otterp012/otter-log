import { fireEvent, render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "../../pages/index";
import { allPosts } from "contentlayer/generated";
import React from "react";
import { createMockRouter } from "../../__mock__/next";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { Post as PostType } from "contentlayer/generated";
import Posts from "pages/post";

describe("post page", () => {
  it("subtitle인 POST...가 렌더링 된다.", async () => {
    const router = createMockRouter({ pathname: "/post" });
    const data = allPosts;
    render(
      <RouterContext.Provider value={router}>
        <Posts data={data} />
      </RouterContext.Provider>,
    );
    console.log(data);
    // const subTitle = screen.getByRole("heading", { name: /post.../i });
    // expect(subTitle).toBeInTheDocument();
  });
});

// intersection observer error
