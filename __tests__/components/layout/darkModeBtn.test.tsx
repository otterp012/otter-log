import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DarkModeBtn from "../../../components/Layout/header/darkModeBtn";

describe("dark mode", () => {
  it("darkMode 버튼이 렌더링 된다.", () => {
    render(<DarkModeBtn />);

    const Button = screen.getByRole("button", { name: /DARK/i });
    expect(Button);
  });

  it("darkMode 버튼을 클릭하면 다크모드로 바뀌고, 다시한번 누르면 라이트 모드로 바뀐다.", async () => {
    render(<DarkModeBtn />);
    const Button = screen.getByRole("button", { name: /DARK/i });
    await userEvent.click(Button);

    expect(Button).toHaveAccessibleName("LIGHT");
    await userEvent.click(Button);

    expect(Button).toHaveAccessibleName("DARK");
  });
});
