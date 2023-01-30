import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DarkModeButton from "./DarkModeButton";

describe("dark mode", () => {
  let rendered: RenderResult;
  let button: HTMLElement;

  beforeEach(() => {
    // arrange
    rendered = render(<DarkModeButton />);
    button = rendered.getByRole("button");
  });

  it("darkMode 버튼이 문제없이 렌더링 되어야 한다.", () => {
    expect(button).toBeInTheDocument();
  });

  it("darkMode 버튼을 클릭하면 다크모드로 바뀌고, 다시한번 누르면 라이트 모드로 바뀐다.", async () => {
    // act
    await userEvent.click(button);

    // assert
    expect(button).toHaveAccessibleName("LIGHT");

    // act
    await userEvent.click(button);

    // assert
    expect(button).toHaveAccessibleName("DARK");
  });
});
