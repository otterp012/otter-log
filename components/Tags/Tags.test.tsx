import { render, screen } from "@testing-library/react";
import Tags from "./Tags";

describe("Card", () => {
  it("tags는 props에 들어온 배열의 요소들이 렌더링된다.", async () => {
    render(<Tags tags={["1", "2", "3"]} />);

    const text1 = screen.getByText("#1");
    const text2 = screen.getByText("#2");
    const text3 = screen.getByText("#3");

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
  });
});
