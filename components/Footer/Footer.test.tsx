import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

it("footer icon 깃허브 주소로 연결된다.", async () => {
  render(<Footer />);

  const GithubIcon = screen.getByRole("link", { name: /github/i });
  expect(GithubIcon.getAttribute("href")).toBe("https://github.com/otterp012");
});
