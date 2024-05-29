import { DefaultTheme } from "styled-components";

export interface ThemeInterface {
  theme?: "light" | "dark" | DefaultTheme["theme"];
}
