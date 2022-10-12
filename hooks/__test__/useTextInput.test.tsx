import { renderHook } from "@testing-library/react";
import useTextInput from "hooks/useTextInput";
import { act } from "react-dom/test-utils";

const mockInputValidator = (value: string) => {
  return value.length > 1;
};

const setUp = () => {
  const { result } = renderHook(() => useTextInput(mockInputValidator));
  return result;
};

describe("useTextInput", () => {
  it("onChangeHandler 함수를 반환한다.", () => {
    const result = setUp();
    const { onChangeHandler } = result.current;

    expect(onChangeHandler).toBeInstanceOf(Function);
  });

  it("searchInput의 초깃값은 ''이고, isValid의 초깃값은 false이다.", () => {
    const result = setUp();
    const { searchValue, isValid } = result.current;

    expect(searchValue).toBe("");
    expect(isValid).toBe(false);
  });

  it("event.target.value 따라 onChangeHandler가 실행되고, searchInput, isValid가 바뀐다.", () => {
    const result = setUp();
    const event = {
      target: { value: "the-value" },
    };

    act(() => {
      result.current.onChangeHandler(event);
    });

    // todo event 객체 목 만들어서 , ts 오류 해결해야함
    expect(result.current.searchValue).toBe("the-value");
    expect(result.current.isValid).toBe(mockInputValidator("the-value"));
  });
});

// https://www.rumblefish.dev/blog/post/how-to-test-custom-react-hooks/
