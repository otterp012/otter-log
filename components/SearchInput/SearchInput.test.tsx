import { fireEvent, render, screen } from "@testing-library/react";

import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  it("SearchInput이 렌더링되면, focus된다.", async () => {
    const mockSaveFn = jest.fn();
    render(<SearchInput onSaveSearchData={mockSaveFn} />);

    const Input = screen.getByPlaceholderText("검색어를 입력해주세요.");
    expect(Input).toHaveFocus();
  });

  it("SearchInput에 2글자 미만 입력되면, 경고 컴포넌트가 노출된다.", () => {
    const mockSaveFn = jest.fn();
    render(<SearchInput onSaveSearchData={mockSaveFn} />);

    const Input = screen.getByPlaceholderText("검색어를 입력해주세요.");
    fireEvent.change(Input, {
      target: {
        value: "1",
      },
    });

    const Paragraph = screen.getByText("두글자 이상 입력해주세요.");
    expect(Paragraph).toBeInTheDocument();
  });

  it("SearchInput에 2글자 이상 입력되면, 경고컴포넌트가 사라진다.", () => {
    const mockSaveFn = jest.fn();
    render(<SearchInput onSaveSearchData={mockSaveFn} />);

    const Input = screen.getByPlaceholderText("검색어를 입력해주세요.");
    fireEvent.change(Input, {
      target: {
        value: "123",
      },
    });

    const Paragraph = screen.queryByText("두글자 이상 입력해주세요.");
    expect(Paragraph).not.toBeInTheDocument();
  });
});
