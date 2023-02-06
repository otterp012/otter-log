import { fireEvent, render, screen } from "@testing-library/react";
import { ToTopButton } from "./ToTopButton";

describe("ToTopButton", () => {
  it("ToTopButton버튼을 누르면, 페이지가 맨 위로 이동된다.", () => {
    window.scroll = jest.fn();

    render(<ToTopButton />);

    const toTopBtn = screen.getByText(/맨 위로 가기/);
    fireEvent.click(toTopBtn);
    expect(window.scroll).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
