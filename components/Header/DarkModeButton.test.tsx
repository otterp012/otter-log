import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { DarkModeButton } from "./DarkModeButton";
import { DarkModeProvider } from "store";

const setup = () => {
  const user = userEvent.setup();
  const view = render(<DarkModeButton />, {
    wrapper: DarkModeProvider,
  });

  const button = () => screen.getByRole("button");

  return {
    user,
    view,
    button,
  };
};

describe("DartModeButton", () => {
  it("접근성 위반사항이 없어야 한다.", async () => {
    const { view } = setup();

    const results = await axe(view.container);

    expect(results).toHaveNoViolations();
  });

  it("다크모드 버튼은 초기에, 라이트 모드로 렌더링 된다.", () => {
    const { button } = setup();

    expect(button()).toHaveAccessibleName("현재 라이트 모드");
  });

  it("다크모드 버튼을 클릭하면, 모드가 변경된다.", async () => {
    const { button, user } = setup();

    const renderedButton = button();
    await user.click(renderedButton);

    expect(renderedButton).toHaveAccessibleName("현재 다크 모드");

    await user.click(renderedButton);
    expect(renderedButton).toHaveAccessibleName("현재 라이트 모드");
  });
});
