import { useDarkMode } from "hooks";
import * as React from "react";

const DarkModeContext = React.createContext<DarkModeContextProps | null>(null);

type DarkModeContextProps = {
  themeIsDark: boolean;
  themeModeHandler(e: React.MouseEvent): void;
};

export const DarkModeProvider = (props: any) => {
  const { children } = props;
  const { themeIsDark, themeModeHandler } = useDarkMode();
  return (
    <DarkModeContext.Provider value={{ themeIsDark, themeModeHandler }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => {
  const context = React.useContext(DarkModeContext);
  if (!context)
    throw new Error(
      "DarkModeProvider로 감싸진 컴포넌트에서만 사용할 수 있습니다.",
    );
  return context;
};
