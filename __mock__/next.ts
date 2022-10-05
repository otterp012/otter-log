import type { NextRouter } from "next/router";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

const mockUseNextRouter = useRouter;

export function createMockRouter(overrides: Partial<NextRouter>) {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    isPreview: false,
    ...overrides,
  };
}

// https://github.com/vercel/next.js/discussions/23034
// mock  router 관련 내용
