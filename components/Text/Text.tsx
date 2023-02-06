import { Poly } from "@over-ui/core";
import * as React from "react";

const DEFAULT_TEXT = "span";
type TextProps = {};
export const Text: Poly.Component<typeof DEFAULT_TEXT, TextProps> =
  React.forwardRef(
    <T extends React.ElementType = typeof DEFAULT_TEXT>(
      props: Poly.Props<T, TextProps>,
      ref: Poly.Ref<T>,
    ) => {
      const { children, as, ...restProps } = props;

      const Tag = as || DEFAULT_TEXT;
      return (
        <Tag {...restProps} ref={ref}>
          {children}
        </Tag>
      );
    },
  );

Text.displayName = "Text";
