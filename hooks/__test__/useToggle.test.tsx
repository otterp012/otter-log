import { renderHook } from "@testing-library/react";
import useToggle from "hooks/useToggle";
import { act } from "react-dom/test-utils";

const mockInitialState = false;

describe("useToggle", () => {
  it("매개변수로 들어간 initial state를 초기값으로 가진다.", () => {
    const { result } = renderHook(() => useToggle(mockInitialState));

    const { state } = result.current;

    expect(state).toBe(mockInitialState);
  });

  it("onToggleHandler 함수를 반환한다.", () => {
    const { result } = renderHook(() => useToggle(mockInitialState));
    const { onToggleHandler } = result.current;

    expect(onToggleHandler).toBeInstanceOf(Function);
  });

  it("onToggleHandler가 실행되면, 상태의 boolean이 반대로 바뀐다.", () => {
    const { result } = renderHook(() => useToggle(mockInitialState));
    // When testing, code that causes React state updates should be wrapped into act(...):

    act(() => {
      result.current.onToggleHandler();
    });

    expect(result.current.state).toBe(true);

    act(() => {
      result.current.onToggleHandler();
    });

    expect(result.current.state).toBe(false);
  });
});
