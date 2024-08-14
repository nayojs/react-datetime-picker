import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "../../types";

export const DatePickerDefaultStyles = createGlobalStyle<ThemeInterface>`
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

  .nayojs-dtp-main-cointainer{
    width:320px;
    position: relative;

  }

  .nayojs-dtp-controller {
  background-color: transparent;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid var(--fifth-color);
  color: var(--primary-color);
  cursor: pointer;
}

.nayojs-dtp-controller input {
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--primary-color);
  flex: 1;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
}

.nayojs-dtp-controller svg {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
`;
