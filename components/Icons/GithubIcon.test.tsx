import { render, screen } from "@testing-library/react";

import { GithubIcon } from "./GithubIcon";

it("GithubIcon 깃허브 주소로 연결된다.", async () => {
  render(<GithubIcon />);

  const icon = screen.getByRole("link", { name: /github/i });
  expect(icon.getAttribute("href")).toBe("https://github.com/otterp012");
});
