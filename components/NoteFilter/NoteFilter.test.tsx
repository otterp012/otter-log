import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRouter } from "../../__mock__/next";
import { RouterContext } from "next/dist/shared/lib/router-context";

import NoteFilter from "./NoteFilter";
import { NOTE_FILTER_OPTIONS } from "constants/constants";
describe("NoteFilter", () => {
  it("NoteFilter를 누르면, 쿼리가 추가된다.", async () => {
    const router = createMockRouter({ pathname: "/note" });
    const mockButton = NOTE_FILTER_OPTIONS[0];
    render(
      <RouterContext.Provider value={router}>
        <NoteFilter />
      </RouterContext.Provider>,
    );

    const Button = screen.getByRole("button", {
      name: mockButton.option,
    });

    fireEvent.click(Button);

    expect(router.push).toHaveBeenCalledWith({
      query: {
        filter: mockButton.query,
      },
    });
  });
});
