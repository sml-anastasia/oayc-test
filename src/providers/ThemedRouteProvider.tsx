import React, { PropsWithChildren, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { defaultTheme, mutantTheme } from "../theme";
import { DefaultTheme, ThemeProvider } from "styled-components";

export const ThemedRouteProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);
  const router = useRouter();
  useEffect(() => {
    if (router.route.includes("/moayc")) {
      setTheme(mutantTheme);
    } else {
      setTheme(defaultTheme);
    }
  }, [setTheme, router.route]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
