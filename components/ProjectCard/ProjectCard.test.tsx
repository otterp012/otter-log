// 모든페이지에 렌더링되는 layout 컴포넌트 테스트
import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { contentLayerMock } from "__mock__/contentLayer";
import { createMockRouter } from "__mock__/next";

import ProjectCard from "./ProjectCard";

describe("Project Card", () => {
  it("Project Card의 섹션을 누르면, 해당 페이지로 이동한다.", async () => {
    const router = createMockRouter({ pathname: "/projects" });
    const { title, thumbnailImg, slug } = contentLayerMock.projectCard;
    const path = `/projects/${slug}`;
    render(
      <RouterContext.Provider value={router}>
        <ProjectCard title={title} thumbnailImg={thumbnailImg} slug={slug} />
      </RouterContext.Provider>,
    );

    const Image = screen.getByRole("img", {
      name: title,
    });

    fireEvent.click(Image);

    expect(router.push).toHaveBeenCalledWith(path, path, {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });

    router.push("/projects");

    const Heading = screen.getByRole("heading", {
      level: 3,
      name: title,
    });

    fireEvent.click(Heading);

    expect(router.push).toHaveBeenCalledWith(path, path, {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });
});
