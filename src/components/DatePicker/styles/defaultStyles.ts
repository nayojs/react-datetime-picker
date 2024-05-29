import { createGlobalStyle, css } from "styled-components";
import { DefaultTheme } from "../../types";

const lightTheme = css`
  --bg-color: #fff;
  --primary-color: #000;
  --secondary-color-500: rgba(0, 0, 0, 0.5);
  --third-color-100: rgba(0, 0, 0, 0.1);
  --fourth-color-50: rgba(0, 0, 0, 0.08);
`;

const darkTheme = css`
  --bg-color: #000;
  --primary-color: #fff;
  --secondary-color-500: rgba(255, 255, 255, 0.5);
  --third-color-100: rgba(55, 255, 255, 0.1);
  --fourth-color-50: rgba(55, 255, 255, 0.08);
`;

export const DefaultStyles = createGlobalStyle<DefaultTheme>`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
  --bg-color: #fff;
  --primary-color: #000;
  --secondary-color-500: rgba(0, 0, 0, 0.5);
  --third-color-100: rgba(0, 0, 0, 0.1);
  --fourth-color-50: rgba(0, 0, 0, 0.08);

/* --bg-color: #000;
  --primary-color: #fff;
  --secondary-color-500: rgba(255, 255, 255, 0.5);
  --third-color-100: rgba(55, 255, 255, 0.1);
  --fourth-color-50: rgba(55, 255, 255, 0.08); */
}
  :root {
    ${({ theme }) => (theme === "dark" ? darkTheme : lightTheme)}
  }


.nayojs-calendar-container *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.nayojs-calendar-container {
  width: 320px;
  padding: 20px;

}

.nayojs-calendar-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.nayojs-calendar-header-title,
.nayojs-calendar-header-navigators {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.nayojs-calendar-header h3 {
  font-size: 18px;
  font-weight: 400;
  padding-left: 10px;
}



.nayojs-calendar-header-button,
.nayojs-calendar-navigators-button,
.nayojs-calendar-day-number {
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  color: var(--primary-color);
}

.nayojs-calendar-header-button:hover,
.nayojs-calendar-navigators-button:hover,
.nayojs-calendar-day-number:hover {
  background-color: var(--fourth-color-50);
  transition: 0.3s ease-in;
}

.nayojs-calendar-header-button svg {
  width: 10px;
  height: 10px;
}

.nayojs-calendar-navigators-button svg {
  width: 12px;
  height: 12px;
}

.nayojs-calendar-days {
  width: 100%
}

.nayojs-calendar-days-header {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.nayojs-calendar-day-title {
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  height: 35px;
  color: var(--secondary-color-500);
}

.nayojs-calendar-days-body {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.nayojs-calendar-day-number-active {
  background-color: rgb(0, 123, 255);
  color: #fff;
}
`;
