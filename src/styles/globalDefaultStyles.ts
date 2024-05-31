import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "../components/types";

export const GlobalrDefaultStyles = createGlobalStyle<ThemeInterface>`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
:root {
  ${({ theme }) =>
    theme === "dark"
      ? `
    --primary-color: #fff;
    --secondary-color: #000;
    --third-color: rgba(255, 255, 255, 0.5);
    --fourth-color: rgba(255, 255, 255, 0.08);
    --fifth-color: rgba(255, 255, 255, 0.2);
    `
      : `
    --primary-color: #000;
    --secondary-color: #fff;
    --third-color: rgba(0, 0, 0, 0.5);
    --fourth-color: rgba(0, 0, 0, 0.08);

    --fifth-color: rgba(0, 0, 0, 0.2);

  `}
}

*{
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
}
`;
