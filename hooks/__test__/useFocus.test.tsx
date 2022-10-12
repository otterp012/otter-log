import { renderHook } from "@testing-library/react";
import useFocus from "hooks/useFocus";
import { act } from "react-dom/test-utils";

describe("useFocus", () => {
  it("isFocus, onFocusHandler, onBlurHandler, inputRef를 반환한다. isFocus의 초깃값은 false이고, inputRef.current === null 이다.", () => {
    const { result } = renderHook(() => useFocus());

    const { inputRef, isFocus, onFocusHandler, onBlurHandler } = result.current;

    expect(isFocus).toBe(false);
    expect(inputRef).toStrictEqual({ current: null });
    // 객체 비교할때 toSTrictEqual
    expect(onFocusHandler).toBeInstanceOf(Function);
    expect(onBlurHandler).toBeInstanceOf(Function);
  });

  it("onFocusHandler가 실행되면, isFocus는 true가 된다.", () => {
    const { result } = renderHook(() => useFocus());

    act(() => {
      result.current.onFocusHandler();
    });

    expect(result.current.isFocus).toBe(true);
  });

  it("onBlurHandler가 실행되면, isFocus는 false가 된다.", () => {
    const { result } = renderHook(() => useFocus());

    act(() => {
      result.current.onFocusHandler();
    });

    expect(result.current.isFocus).toBe(true);

    act(() => {
      result.current.onBlurHandler();
    });

    expect(result.current.isFocus).toBe(false);
  });
  // it("mount되었을때 inputRef.current가 있다면 focus() 한다.", () => {
  //   const { result, rerender } = renderHook(() => useFocus());
  //   rerender();
  // // useEffect + ref 사용하는 테스트 처리 어떻게 할지 고민중..
  // });
});
